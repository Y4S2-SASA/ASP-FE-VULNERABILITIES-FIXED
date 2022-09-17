import React, { useState, useEffect } from 'react'
import NavBar from "../../components/LayoutComponents/NavBar";
import { applyToast } from "../../components/toast-message/toast";
import DoughnutChart from "../../components/report/charts/DoughnutChart";
import ReportHeader from "../../components/report/header/ReportHeader";
import { findUsers } from "../../api/User/userApi";
import "./UsersReport.css";
import Table from '../../components/Table/Table';
import { data } from 'autoprefixer';

export default function UsersReport(props) {
    const [tagsLabels, setTagsLabels] = useState([]);
    const [tagsData, setTagsData] = useState([]);
    const [dateFilteredData, setDateFilteredData] = React.useState([]);
    const [adminRoles, setAdminRoles] = React.useState([]);
    const [clientRoles, setClientRoles] = React.useState([]);
    const [users, setUsers] = React.useState([]);
    const [isDataAvailable, setIsDataAvailable] = React.useState(false);

    useEffect(() => {
        setIsDataAvailable(false);
        getUsers();
        console.log("tableData", tableData)
    }, []);
    
    const getUsers = () => {
        const startDate = document.getElementById("startDate").value;
        const endDate = document.getElementById("endDate").value;

        findUsers()
          .then(res => {
            if(res.data.isSuccessful) {
                setIsDataAvailable(true);
                let userData = res.data.responseData;
                console.log(userData)
                setUsers(userData);
                console.log(userData);
                setDateFilteredData(userData.filter(e => e.createdAt >= startDate && e.createdAt <= endDate));
                setClientRoles(userData.filter(e => e.role === "CLIENT"));
                setAdminRoles(userData.filter(e => e.role === "ADMIN"));
                setTagsLabels(["All Users", `Registered (${startDate} - ${endDate})`, 'Clients', 'Admins']);
                setTagsData([userData?.length, dateFilteredData.length, clientRoles.length, adminRoles.length]);
                applyToast('Generated Successfully!', 'success');
            } else {
                console.error("error");
                applyToast('Failed to Generate!', 'error');
            }
          })
          .catch(() => console.log("couldn't fetch"));
    };

    const tableData = [
        {
            type: "All Users",
            count: users?.length || 0
        },
        {
            type: "Registered Users",
            count: dateFilteredData?.length || 0
        },
        {
            type: "Client Users",
            count: clientRoles?.length || 0
        },
        {
            type: "Admin Users",
            count: adminRoles?.length || 0
        }
    ];

    return (
        <>
            <NavBar />
            <ReportHeader onGenerate={getUsers} />
            <p>Choose start date and end date. Then click on generate report</p>

            <div className="grid grid-cols-2 gap-2">
                <div >
                <Table
                                        head={
                                            <>
                                                <tr>
                                                    <th scope="col" className="py-3 px-6">
                                                        Type
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Count
                                                    </th>
                                                </tr>
                                            </>
                                        }
                                        body={
                                            <>
                                            {tableData.map((row) => (
                                                <tr className='self-center'>
                                                    <td className='py-4 px-6'>{row.type}</td>
                                                    <div className="grid">
                                                        <td className='py-4 px-6 justify-self-center'>{row.count}</td>
                                                    </div>
                                                </tr>
                                            ))}
                                            </> 
                                        }
                                    />
                </div>
                <div>
                    {tagsLabels && tagsData &&
                        <DoughnutChart
                            labels={tagsLabels}
                            data={tagsData}
                        />
                    }
                </div>
            </div>

        </>
    )
}