import NavBar from "../../components/LayoutComponents/NavBar";
import "./UsersReport.css";
import { getTags } from "../../api/QuestionsApi";
import { applyToast } from "../../components/toast-message/toast";
import DoughnutChart from "../../components/report/charts/DoughnutChart";
import ReportHeader from "../../components/report/header/ReportHeader";
import React, { useState, useEffect } from 'react'
import { findUsers } from "../../api/User/userApi";

export default function UsersReport(props) {
    const [tagsLabels, setTagsLabels] = useState([]);
    const [tagsData, setTagsData] = useState([]);
    const [dateFilteredData, setDateFilteredData] = React.useState([]);
    const [adminRoles, setAdminRoles] = React.useState([]);
    const [clientRoles, setClientRoles] = React.useState([]);
    const [users, setUsers] = React.useState([]);

    useEffect(() => {
        getUsers();
    }, []);

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
            } else {
                console.error("error");
            }
          })
          .catch(() => console.log("couldn't fetch"));
    };

    return (
        <>
            <NavBar />
            <ReportHeader onGenerate={getUsers} />
            <p>Choose start date and end date. then click on generate report</p>

            <div className="grid grid-cols-2 gap-2">
                <div >

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