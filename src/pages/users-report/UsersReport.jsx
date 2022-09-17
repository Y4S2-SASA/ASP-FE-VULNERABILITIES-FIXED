import React, { useState, useEffect } from 'react'
import NavBar from "../../components/LayoutComponents/NavBar";
import { applyToast } from "../../components/toast-message/toast";
import DoughnutChart from "../../components/report/charts/DoughnutChart";
import ReportHeader from "../../components/report/header/ReportHeader";
import { findUsers } from "../../api/User/userApi";
import "./UsersReport.css";
import Table from '../../components/Table/Table';
import _ from 'lodash';

export default function UsersReport(props) {
    const [tagsLabels, setTagsLabels] = useState([]);
    const [tagsData, setTagsData] = useState([]);
    const [dateFilteredData, setDateFilteredData] = React.useState([]);
    const [adminRoles, setAdminRoles] = React.useState([]);
    const [clientRoles, setClientRoles] = React.useState([]);
    const [users, setUsers] = React.useState([]);

    const [apiResponseWaiting, setApiResponseWaiting] = React.useState(false);
    const [paginatedOrders, setPaginatedOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;
    const pageCount = dateFilteredData ? Math.ceil(dateFilteredData.length/pageSize) : 0;
    const pages = _.range(1, pageCount + 1);

    useEffect(() => {
        if(pageCount === 1) return null; 
    }, [pageCount]);

    const getUsers = () => {
        const startDate = document.getElementById("startDate").value;
        const endDate = document.getElementById("endDate").value;

        findUsers()
          .then(res => {
            if(res.data.isSuccessful) {
                let userData = res.data.responseData;
                console.log(userData)
                setUsers(userData);
                console.log(userData);
                setDateFilteredData(userData.filter(e => e.createdAt >= startDate && e.createdAt <= endDate));
                setClientRoles(userData.filter(e => e.role === "CLIENT"));
                setAdminRoles(userData.filter(e => e.role === "ADMIN"));
                setTagsLabels(["All Users", `Registered (${startDate} - ${endDate})`, 'Clients', 'Admins']);
                setTagsData([userData?.length, dateFilteredData.length, clientRoles.length, adminRoles.length]);
                setPaginatedOrders(_(dateFilteredData).slice(0).take(pageSize).value());
                applyToast('Generated Successfully!', 'success');
            } else {
                console.error("error");
                applyToast('Failed to Generate!', 'error');
            }
          })
          .catch(() => console.log("couldn't fetch"));
    };

    const pagination = (pageNo) =>{
        setCurrentPage(pageNo)
        const startIndex = (pageNo -1) * pageSize;
        const paginatedOrder = _(dateFilteredData).slice(startIndex).take(pageSize).value();
        setPaginatedOrders(paginatedOrder);
    };

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
                                        <th scope="col" className="py-3 px-6">#</th>
                                        <th scope="col" className="py-3 px-6">User ID</th>
                                        <th scope="col" className="py-3 px-6">User Name</th>
                                        <th scope="col" className="py-3 px-6">Email</th>
                                        <th scope="col" className="py-3 px-6">Contact</th>
                                        <th scope="col" className="py-3 px-6">User Role</th>
                                        <th scope="col" className="py-3 px-6">Actions</th>
                                    </tr>
                                </>
                            }
                            body={
                                apiResponseWaiting ?
                                    <>
                                        <center>
                                            <div className="flex justify-center items-center">
                                                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-red-800" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>
                                        </center>
                                    </> : 
                                    <>
                                        {paginatedOrders.map((user) =>(
                                            <>
                                            <tr className='self-center' key={user}>
                                                <td className='py-4 px-6'>
                                                    <img src={user?.pic} className="rounded-full w-10 shadow-lg" alt="Avatar" />
                                                </td>
                                                <td className='py-4 px-6'>{user?._id?.substring(0, 6) || '-'}</td>
                                                <td className='py-4 px-6'>{(user?.firstName + " " + user?.lastName)}</td>
                                                <td className='py-4 px-6'>{user?.email}</td>
                                                <td className='py-4 px-6'>{user?.contactNo}</td>
                                                <td className='py-4 px-6'>{user?.role}</td>
                                            </tr>
                                            </>
                                        ))}
                                    </>
                            }
                            currentPage={currentPage}
                            pageCount={pageCount}
                            pages={pages}
                            pagination={pagination}
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