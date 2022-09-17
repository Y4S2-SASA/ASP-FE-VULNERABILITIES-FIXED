
import Button from '../../buttons/Buttons';
import './Header.css';

export default function ReportHeader(props) {

    return (
        <div className="report-header bg-gray-300">
            <div className="header-box">
                <span>Start Date</span>
                <br />
                <input type="date" id="startDate" className="datepicker" />
            </div>
            <div className="header-box">
                <span>End Date</span>
                <br />
                <input type="date" id="endDate" className="datepicker" />
            </div>
            <div className="header-box">
                <div className="btn-wrapper">
                    <Button onClick={props.onGenerate}>Generate Report</Button>
                </div>
            </div>
            <div className="header-box">
                <div className="btn-wrapper">
                    <center>
                        <Button variant="dark" onClick={() => window.print()}>Convert to PDF</Button>
                    </center>
                </div>
            </div>
        </div>
    )
}