import React, { useContext, useEffect, useState } from 'react'
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import orderRequest from '../../api/Order/order.request';
import { AuthContext } from '../../App';
import AccordionLayout from '../../components/Accordion/AccordionLayout';
import NavBar from '../../components/LayoutComponents/NavBar'

export default function MyReservations() {
    const loggedInUser = useContext(AuthContext);
    const {userId} = loggedInUser;
    const buyer = userId;
    const [activeIndex, setActiveIndex] = useState(0);
    const [orders, setOrders] = useState([]);
    const [item, setItem] = useState({});
    const [seller, setSeller] = useState({});

    const getOrders = () =>{
        orderRequest.getUserOrders(buyer)
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
   <>
    <NavBar/><br/>
    <div className="bg-gray-100">
        <div className='max-w-7xl mx-auto px-10 sm:px-10 lg:px-6'>
            <div className="max-w-2xl mx-auto py-5 lg:max-w-none">
                <div className='lg:grid lg:grid-cols-2'>
                    <div className='col-span-1 mt-5'>
                        <h3 className='text-xl font-semibold'>My Reservations</h3>
                    </div>
                    <div className='col-span-1 mt-5 justify-self-end'>
                        <form>
                        <div className="flex">
                            <div className="dropdown relative">
                                <button id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
                                    Filter
                                    <svg aria-hidden="true" className="ml-1 w-4 h-4"  fill="currentColor"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" 
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                                            clipRule="evenodd" />
                                    </svg>
                                </button>
                                <ul className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0" aria-labelledby="dropdownMenuButton1">
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
                                    className="block p-2.5 lg:w-96 z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" 
                                    placeholder="Search..."/>
                            </div>
                        </div>
                        </form><br/>
                    </div>
                </div>
                <div className='flex flex-col'>
                    {
                        orders.map((row) =>(
                            <div onClick={()=>handleItemDetails(row._id)}>
                                <AccordionLayout 
                                title={
                                    <>
                                        <div className='grid grid-cols-2'>
                                            <div className='col-span-1'>
                                                ORDER ID : {row.orderId}
                                            </div>
                                            <div className='col-span-1 px-9'>
                                                Status : {row.status}
                                            </div>
                                        </div>
                                    </>
                                }
                                index={row._id}
                                activeIndex={activeIndex}
                                setActiveIndex={setActiveIndex}
                            > 
                                    <div className='lg:grid lg:grid-cols-4 lg:gap-x-3'>
                                        <div className='relative w-72 h-60 col-span-1'>
                                            <img src={item.imageUrl} className='w-full h-full bg-white object-center object cover border' alt='Item'></img>
                                        </div>
                                        <div class=" px-5 col-span-3">
                                        <br/>
                                            <div className='lg:grid lg:grid-cols-3'>
                                                <div className='col-span-2 grid grid-cols-2 lg:grid lg:grid-cols-3 text-gray-900'>
                                                        <h3 className='text-base font-semibold lg:col-span-1 mt-5'>Item Name :</h3>
                                                        <h4 className='text-base font-medium lg:col-span-2  mt-5'>{item.name}</h4>
                                                        <h3 className='text-base font-semibold lg:col-span-1 mt-5'>Seller's Name :</h3>
                                                        <h4 className='text-base font-medium lg:col-span-2 mt-5'>{seller.firstName} {seller.lastName}</h4>
                                                        <h3 className='text-base font-semibold lg:col-span-1 mt-5'>Quantity :</h3>
                                                        <h4 className='text-base font-medium lg:col-span-2 mt-5'>{row.quantity} item(s)</h4>
                                                        <h3 className='text-base font-semibold lg:col-span-1 mt-5'>Price :</h3>
                                                        <h4 className='text-base font-medium lg:col-span-2 mt-5'>Rs. {row.total}</h4>
                                                </div>
                                                <div className='col-span-1 self-center'>
                                                    <div className="flex center-items text-3xl pt-5">
                                                        <div className="pr-5 cursor-pointer text-gray-900" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Request"><BsPencilSquare/></div>
                                                        <div className="pr-5 cursor-pointer text-red-800" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete Request"><BsFillTrashFill/></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </AccordionLayout>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div><br/>
    </>
  )
}
