import NavBar from "../../components/LayoutComponents/NavBar";
import Header from "./Header";
import "./QuestionReport.css";
import { Doughnut } from "react-chartjs-2";
import Table from "../../components/Table/Table";
import _ from 'lodash';
import { useState } from "react";

const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};


export default function QuestionReport(props) {
    const pageSize = 5;
    const [paginatedOrders, setPaginatedOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageCount = 0;
    const pages = _.range(1, pageCount + 1)

    const pagination = (pageNo) =>{
        setCurrentPage(pageNo)
        const startIndex = (pageNo -1) * pageSize;
        const paginatedOrder = _([]).slice(startIndex).take(pageSize).value();
        setPaginatedOrders(paginatedOrder);
    }

    return (
        <>
            <NavBar />
            <Header />
            <div className="grid grid-cols-2 gap-2">
                <div >
                <Table
                            head={
                                <>
                                    <tr>
                                        <th scope="col" className="py-3 px-6">
                                            Order ID
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Item Name
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Quantity
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Price
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Status
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Action
                                        </th>
                                    </tr>
                                </>
                            }
                            body={
                                <>
                     
                            
                                        <tr className='self-center'>
                                            <td className='py-4 px-6'>halo</td>
                                            <td className='py-4 px-6'>halo</td>
                                            <td className='py-4 px-6'>halo</td>
                                            <td className='py-4 px-6'>halo</td>
                                            <td className='py-4 px-6'>halo</td>
                                            <td>halo</td>
                                        </tr>
                                        <tr className='self-center'>
                                            <td className='py-4 px-6'>halo</td>
                                            <td className='py-4 px-6'>halo</td>
                                            <td className='py-4 px-6'>halo</td>
                                            <td className='py-4 px-6'>halo</td>
                                            <td className='py-4 px-6'>halo</td>
                                            <td>halo</td>
                                        </tr>
                                        <tr className='self-center'>
                                            <td className='py-4 px-6'>halo</td>
                                            <td className='py-4 px-6'>halo</td>
                                            <td className='py-4 px-6'>halo</td>
                                            <td className='py-4 px-6'>halo</td>
                                            <td className='py-4 px-6'>halo</td>
                                            <td>halo</td>
                                        </tr>
                                        <tr className='self-center'>
                                            <td className='py-4 px-6'>halo</td>
                                            <td className='py-4 px-6'>halo</td>
                                            <td className='py-4 px-6'>halo</td>
                                            <td className='py-4 px-6'>halo</td>
                                            <td className='py-4 px-6'>halo</td>
                                            <td>halo</td>
                                        </tr>                  <tr className='self-center'>
                                            <td className='py-4 px-6'>halo</td>
                                            <td className='py-4 px-6'>halo</td>
                                            <td className='py-4 px-6'>halo</td>
                                            <td className='py-4 px-6'>halo</td>
                                            <td className='py-4 px-6'>halo</td>
                                            <td>halo</td>
                                        </tr>
                  
                                </> 
                            }
                            currentPage={currentPage}
                            pageCount={pageCount}
                            pages={pages}
                            pagination={pagination}
                        />
                </div>
                <div >
                    <Doughnut data={data} />
                </div>
            </div>

        </>
    )
}