import React, { useEffect, useState } from 'react'
import orderRequest from '../../api/Order/order.request';
import AccordionLayout from '../../components/Accordion/AccordionLayout';
import Button from '../../components/buttons/Buttons';
import NavBar from '../../components/LayoutComponents/NavBar'
import ProfileSideNav from '../../components/Profile/ProfileSideNav';
import { getAuth } from '../../helper/helper';
import style from "./reservation.module.css";
export default function MyReservations() {
 //   const buyer = getAuth(localStorage.getItem('token'))._id;
    const [activeIndex, setActiveIndex] = useState(0);
    const [orders, setOrders] = useState([]);
    const [item, setItem] = useState({});
    const [seller, setSeller] = useState({});

    const getOrders = () =>{
        orderRequest.getUserOrders('')
        .then((response) =>{
            console.log(response.data.data)
            setOrders(response.data.data);
        }).catch((error) =>{
            console.error(error.message);
        })
    }

    const handleItemDetails = (id) =>{
        orderRequest.getUserOrder(id)
        .then((response) =>{
           setItem(response.data.data.item);
           setSeller(response.data.data.item.createdBy)
        }).catch((error) =>{
            console.error(error.message);
        })
    }
    useEffect(() =>{
        getOrders();
    },[])

  return (
    <div>
        <NavBar/>
        <div className='grid grid-cols-12 py-2'>
            <div className='col-span-2'>
            <ProfileSideNav />
            </div>
            <div className='col-span-10 px-5'>
                <form>
                <div className="flex">
                    <div className="dropdown relative">
                    <button id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
                        Filter
                        <svg aria-hidden="true"
                            className="ml-1 w-4 h-4" 
                            fill="currentColor" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" 
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                                clipRule="evenodd" />
                        </svg>
                    </button>
                    <ul className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
                                aria-labelledby="dropdownMenuButton1">
                    <li>
                        <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ascending</button>
                    </li>
                    <li>
                        <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Descending</button>
                    </li>
                    </ul>
                    </div>
                    <div className="relative w-full">
                        <input type="search" 
                            id="search-dropdown" 
                            className="block p-2.5 w-96 z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" 
                            placeholder="Search..."/>
                    </div>
                </div>
                </form><br/>
                <div className='flex flex-col'>
                    {
                        orders.map((row) =>(
                            <div onClick={()=>handleItemDetails(row._id)}>
                             <AccordionLayout 
                                title={
                                    <>
                                        <div className='grid grid-cols-12'>
                                            <div className='col-span-7 '>
                                                ORDER ID : {row.orderId}
                                            </div>
                                            <div className='col-span-5 px-9'>
                                                Status : {row.status}
                                            </div>
                                        </div>
                                    </>
                                }
                                index={row._id}
                                activeIndex={activeIndex}
                                setActiveIndex={setActiveIndex}
                            > 
                                <center>
                                    <div className={style.user_detail_container}>
                                        <div className='grid grid-flow-row-dense grid-cols-12'>
                                            <div className='col-span-2'>
                                                <img src={row.imageUrl} className={style.img_size} alt='Item'></img>
                                            </div>
                                            <div class=" p-1 col-span-7">
                                            <br/>
                                            <div className={style.user_detail_container}>
                                                <div className='grid grid-flow-row-dense grid-cols-6 px-2'>
                                                    <div className='col-span-2 p-1'>
                                                        <h3 className={style.label}>Item Name</h3>
                                                    </div>
                                                    <div className='col-span-4 p-1'>
                                                        <h4 className={style.label_data}>: {item.name}</h4>
                                                    </div>
                                                    <div className='col-span-2 p-1'>
                                                        <h3 className={style.label}>Seller's Name</h3>
                                                    </div>
                                                    <div className='col-span-4 p-1'>
                                                        <h4 className={style.label_data}>: {seller.firstName} {seller.lastName}</h4>
                                                    </div>
                                                    <div className='col-span-2 p-1'>
                                                        <h3 className={style.label}>Quantity</h3>
                                                    </div>
                                                    <div className='col-span-4 p-1'>
                                                        <h4 className={style.label_data}>: {row.quantity}</h4>
                                                    </div>
                                                    <div className='col-span-2 p-1'>
                                                        <h3 className={style.label}>Price</h3>
                                                    </div>
                                                    <div className='col-span-4 p-1'>
                                                        <h4 className={style.label_data}>: {row.total}</h4>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className='col-span-3'><br/><br/><br/>
                                                <div className='grid grid-cols-2'>
                                                    <div className='col-span-1'>
                                                    <a href="#" className="ml-0 md:ml-96" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Request">
                                                        <img src="images/edit.jpg" className="rounded-full w-8 h-8 shadow-lg" alt="Edit" />
                                                    </a>
                                                    </div>
                                                    <div className='col-span-1'>
                                                    <a href="#" className="ml-0 md:ml-96" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Request">
                                                        <img src="images/trash.svg" className="rounded-full w-8 h-8 shadow-lg" alt="Edit" />
                                                    </a>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </center>
                            </AccordionLayout>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
