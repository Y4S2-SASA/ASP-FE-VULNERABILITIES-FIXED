import NavBar from "../../components/LayoutComponents/NavBar";
import "./QuestionReport.css";
import { useState } from "react";

import { applyToast } from "../../components/toast-message/toast";
import DoughnutChart from "../../components/report/charts/DoughnutChart";
import ReportHeader from "../../components/report/header/ReportHeader";
import orderRequest from "../../api/Order/order.request";
import { forEach } from "lodash";

export default function OrderReport() {
    const [buyerLabels, setBuyerLabels] = useState([]);
    const [buyerData, setBuyerData] = useState([]);

    const onGenerate = () => {
        // getting selected start date and end date from date pickers in ReportHeader.jsx
        const startDate = document.getElementById("startDate").value;
        const endDate = document.getElementById("endDate").value;

        // making labels and data empty to rerender the Dougnut chart after fetching data.
        // Doughnut chart eke props wenas unama rerender wena widiyata eyala hadala na.
        setBuyerLabels([]);
        setBuyerData([]);

        // fetching data and setting label and data values
        orderRequest.getOrderReport({ startDate, endDate })
            .then(res => {
                const buyer = res.data.data;
                const lables = Object.keys(buyer)
                const names = [];
                for(let i = 0; i < lables.length; i++){
                    names[i] = lables[i].split(',').pop();
                }
                setBuyerLabels(names);
                setBuyerData(Object.values(buyer));
            })
            .catch(err => applyToast())
    }

    return (
        <>
            <NavBar />
            <ReportHeader onGenerate={onGenerate} />
            <p>Choose start date and end date. then click on generate report</p>

            <div className="grid grid-cols-2 gap-2">
                <div >

                </div>
                <div>
                    {buyerLabels && buyerData &&
                        <DoughnutChart
                            labels={buyerLabels}
                            data={buyerData}
                        />
                    }
                </div>
            </div>

        </>
    )
}