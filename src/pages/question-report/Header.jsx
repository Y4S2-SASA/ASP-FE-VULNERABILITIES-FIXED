import Button from '../../components/buttons/Buttons';
import './Header.css';

export default function Header() {
    return (
        <div className="report-header bg-gray-300">
            <div className="header-box">
                <span>Start Date</span>
                <br />
                <input type="date" className="datepicker" />
            </div>
            <div className="header-box">
                <span>End Date</span>
                <br />
                <input type="date" className="datepicker" />
            </div>
            <div className="header-box">
                <div className="btn-wrapper">
                    <Button>Generate Report</Button>
                </div>
            </div>
            <div className="header-box">
                <div className="btn-wrapper">
                    <center>
                        <Button variant="dark">Convert to PDF</Button>
                    </center>
                </div>
            </div>
        </div>
    )
}