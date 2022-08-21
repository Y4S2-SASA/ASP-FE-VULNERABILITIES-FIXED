import React, { useContext, useEffect, useState } from 'react'
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import orderRequest from '../../api/Order/order.request';
import { AuthContext } from '../../App';
import AccordionLayout from '../../components/Accordion/AccordionLayout';
import NavBar from '../../components/LayoutComponents/NavBar'
import Button from '../../components/buttons/Buttons';
import { applyToast } from '../../components/toast-message/toast';


export default function MyReservations() {
    const loggedInUser = useContext(AuthContext);
    const {userId} = loggedInUser;
    const buyerId = userId;
    const [activeIndex, setActiveIndex] = useState(0);
    const [orders, setOrders] = useState([]);
    const [item, setItem] = useState({});
    const [seller, setSeller] = useState({});
    const [order, setOrder] = useState({});
    const [total, setTotal] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [newQuantity, setNewQuantity] = useState(0)
    const [buyer, setBuyer] = useState({});
    const [status, setStatus] = useState('NEW');
    const [newTotal, setNewTotal] = useState(0);

    const getOrders = () =>{
        orderRequest.getUserOrders(buyerId)
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
            setOrder(response.data.data);
            setBuyer(response.data.data.buyer)
            setItem(response.data.data.item);
            setQuantity(order.quantity)
            setSeller(response.data.data.item.createdBy)
            setTotal(response.data.data.total)
        }).catch((error) =>{
            console.error(error.message);
        })
    }

    const handleIncrement = () =>{
        if(status === 'UPDATED'){
            let qty = parseInt(newQuantity) + 1;
            let price = parseInt(item.price);
            setNewQuantity(qty);
            let totalPrice = price * qty
            setNewTotal(totalPrice);
        }else{
            let qty = parseInt(quantity) + 1;
            let price = parseInt(item.price);
            setNewQuantity(qty);
            setStatus('UPDATED')
            let totalPrice = price * qty
            setNewTotal(totalPrice);
        }
    }

    const handleDecrement = () =>{
        if(status === 'UPDATED'){
            if(newQuantity === 0) {
                parseInt(newQuantity);
            }else{
                let qty = parseInt(newQuantity) - 1;
                let price = parseInt(item.price);
                setNewQuantity(qty);
                let totalPrice = price * qty
                setNewTotal(totalPrice);
            }
        }else{
            if(quantity === 0) {
                parseInt(quantity);
            }else{
                let qty = parseInt(quantity) - 1;
                let price = parseInt(item.price);
                setNewQuantity(qty);
                setStatus('UPDATED')
                let totalPrice = price * qty
                setNewTotal(totalPrice);
            }
        }
    }

    const handleUpdate = (id) =>{
        order.quantity = newQuantity;
        order.total = newTotal;
        orderRequest.updateOrderDetails(id, order)
        .then((response) =>{
            getOrders();
            applyToast('Order details updated successfully!', 'success');
            setStatus('NEW')
        }).catch((error) =>{
            console.error(error);
            applyToast('Order detail update failed!', 'error');
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
                                                        <div className="pr-5 cursor-pointer text-gray-900" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Request"><BsPencilSquare data-bs-toggle="modal" data-bs-target="#updateReservationDetails"/></div>
                                                        <div className="pr-5 cursor-pointer text-red-800" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete Request"><BsFillTrashFill/></div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="updateReservationDetails" tabIndex={-1} aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
                                                    <div className="modal-dialog modal-xl modal-dialog-centered relative w-auto pointer-events-none">
                                                        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                                            <h5 className="text-xl font-medium leading-normal text-gray-800">
                                                                Update Reservation Details
                                                            </h5>
                                                            <button type="button" className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-toggle="tooltip" data-bs-placement="top" title="Close" data-bs-dismiss="modal" aria-label="Close" />
                                                        </div>
                                                        <div className="modal-body relative p-4">
                                                           <div className='max-w-7xl mx-auto px-2 sm:px-10 lg:px-6'>
                                                            <h3 className="mt-5 px-5 text-lg font-semibold">
                                                                User Details
                                                            </h3>
                                                            <div className="mt-3 px-5 grid grid-cols-2 lg:grid lg:grid-cols-6 lg:gap-x-6">
                                                                <h3 className="mt-3 px-5 text-base font-semibold lg:col-span-1">
                                                                    First Name :
                                                                </h3>
                                                                <h4 className="mt-4 px-5 font-medium lg:col-span-2">{buyer.firstName}</h4>
                                                                <h3 className="mt-3 px-5 text-base font-semibold lg:col-span-1">
                                                                    Last Name  : 
                                                                </h3>
                                                                <h4 className="mt-4 px-5 font-medium lg:col-span-2">{buyer.lastName}</h4>
                                                                <h3 className="mt-3 px-5 text-base font-semibold lg:col-span-1">
                                                                    Email :  
                                                                </h3>
                                                                <h4 className="mt-4 px-5 font-medium lg:col-span-2">{buyer.email}</h4>
                                                                <h3 className="mt-3 px-5 text-base font-semibold lg:col-span-1">
                                                                    Contact No : 
                                                                </h3>
                                                                <h4 className="mt-4 px-5 font-medium lg:col-span-2"> {buyer.contactNo}</h4>
                                                            </div>
                                                            <div class="mt-5 flex-grow border-t border-gray-300"></div>
                                                            <h3 className="mt-5 px-5 text-lg font-semibold">
                                                                Item Details
                                                            </h3>
                                                            <div className="mt-3 px-5 grid grid-cols-2 lg:grid lg:grid-cols-6 lg:gap-x-6">
                                                                <h3 className="mt-3 px-5 text-base font-semibold lg:col-span-1">
                                                                    Item Name :
                                                                </h3>
                                                                <h4 className="mt-4 px-5 font-medium lg:col-span-2">{item.name}</h4>
                                                                <h3 className="mt-3 px-5 text-base font-semibold lg:col-span-1">
                                                                    Seller Name  : 
                                                                </h3>
                                                                <h4 className="mt-4 px-5 font-medium lg:col-span-2">{seller.firstName} {seller.lastName}</h4>
                                                                <div className="lg:mt-4 px-5 font-medium col-span-2 lg:col-span-3  grid grid-cols-2 lg:grid lg:grid-cols-3">
                                                                    <h3 className='text-base font-semibold col-span-1 lg:col-span-1 mt-5'>Quantity :</h3>
                                                                    <div class="flex flex-row h-10 w-full rounded-lg col-span-1 relative bg-transparent lg:col-span-2  mt-5 lg:mt-5lg:col-span-2 lg:px-5">
                                                                        <button onClick={handleDecrement} class=" bg-gray-300 text-gray-600  hover:text-gray-700 hover:bg-gray-400 h-7 w-10 rounded-l cursor-pointer outline-none">
                                                                            <span class="m-auto text-2xl font-thin">−</span>
                                                                        </button>
                                                                            {
                                                                                status === 'UPDATED' ?
                                                                                    <>
                                                                                        <h4 className='px-2 py-0.5'> 
                                                                                            {newQuantity}
                                                                                        </h4>
                                                                                    </>:
                                                                                    <>
                                                                                        <h4 className='px-2 py-0.5'> 
                                                                                            {quantity}
                                                                                        </h4>
                                                                                    </>
                                                                            }
                                                                        <button onClick={handleIncrement} class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-7 w-10 rounded-r cursor-pointer">
                                                                            <span class="m-auto text-2xl font-thin">+</span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className="lg:mt-4 px-5 font-medium col-span-2 lg:col-span-3 lg:grid lg:grid-cols-3">
                                                                    <div className=" col-span-1 lg:col-span-1 text-base font-semibold mt-4">
                                                                        Order Price : 
                                                                    </div>
                                                                    <div className='col-span-1 mt-3 lg:col-span-2 lg:px-4'>
                                                                        <span class="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 h-9 w-10 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                                                            LKR
                                                                        </span>
                                                                        {
                                                                            status === 'UPDATED'?
                                                                            <>
                                                                                <input type="text" name="total" class="rounded-none border p-0.5 h-9 w-40" placeholder="Price" value={newTotal}/>
                                                                            </>:
                                                                            <>
                                                                                <input type="text" name="total" class="rounded-none border p-0.5 h-9 w-40" placeholder="Price" value={total}/>
                                                                            </>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                           </div>
                                                        </div>
                                                        <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                                            <div className="transition duration-150 ease-in-out px-3" data-bs-dismiss="modal" >
                                                                <Button variant={'alternative'}>Close</Button>
                                                            </div>
                                                            <div className='transition duration-150 ease-in-out ml-1' data-bs-dismiss="modal">
                                                                <Button onClick={()=> handleUpdate(row._id)}>Update</Button>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
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
