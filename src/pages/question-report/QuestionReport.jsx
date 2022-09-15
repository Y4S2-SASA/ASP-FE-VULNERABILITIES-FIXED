import NavBar from "../../components/LayoutComponents/NavBar";
import "./QuestionReport.css";
import { useState } from "react";
import { getTags } from "../../api/QuestionsApi";
import { applyToast } from "../../components/toast-message/toast";
import DoughnutChart from "../../components/report/charts/DoughnutChart";
import ReportHeader from "../../components/report/header/ReportHeader";

export default function QuestionReport(props) {
    const [tagsLabels, setTagsLabels] = useState([]);
    const [tagsData, setTagsData] = useState([]);

    const onGenerate = () => {
        // getting selected start date and end date from date pickers in ReportHeader.jsx
        const startDate = document.getElementById("startDate").value;
        const endDate = document.getElementById("endDate").value;

        // making labels and data empty to rerender the Dougnut chart after fetching data.
        // Doughnut chart eke props wenas unama rerender wena widiyata eyala hadala na.
        setTagsLabels([]);
        setTagsData([]);

        // fetching data and setting label and data values
        getTags({ startDate, endDate })
            .then(res => {
                const tags = res.data.data;
                setTagsLabels(Object.keys(tags));
                setTagsData(Object.values(tags));
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