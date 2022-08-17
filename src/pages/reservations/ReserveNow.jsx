import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import NavBar from '../../components/LayoutComponents/NavBar';
import style from "./reservation.module.css"
import Button from '../../components/buttons/Buttons';
import { getAuth } from '../../helper/helper';
import { findUsers } from '../../api/UserApi';
import orderRequest from '../../api/Order/order.request';
import itemRequest from '../../api/Item/item.request';

export default function ReserveNow() {
    const userId = getAuth(localStorage.getItem('token'))._id;
    const params = useParams()
    const itemId = params.id;
    const [user, setUser] = useState({});
    const [item, setItem] = useState({});
    const [seller, setSeller] = useState({});
    const [order] = useState({
        buyer:userId,
        item:itemId,
        quantity:0,
        status:'Pending',
        total:0
    })
    const [total, setTotal] = useState(0);
    const [quantity, setQuantity] = useState(0);

    useEffect(()=>{
        getUserDetails();
        getItemDetails();
    },[]);

    const getUserDetails = () =>{
        findUsers(`_id=${userId}`)
        .then((res) =>{
            setUser(res.data.responseData[0])
        }).catch((error) =>{
            console.error(error.message)
        })
    }

    const getItemDetails = () =>{
        itemRequest.getOneItem(itemId)
        .then((res) =>{
            setItem(res.data.data);
            setSeller(res.data.data.createdBy);
        }).catch((error) =>{
            console.error(error.message)
        })
    }

    const handleIncrement = () =>{
        let qty = parseInt(quantity) + 1;
        let price = parseInt(item.price);
        setQuantity(qty);
        let totalPrice = price * qty
        setTotal(totalPrice);
    }

    const handleDecrement = () =>{
        if(quantity === 0) {
            parseInt(quantity);
        }else{
            let qty = parseInt(quantity) - 1;
            let price = parseInt(item.price);
            setQuantity(qty);
            let totalPrice = price * qty
            setTotal(totalPrice);
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        order.total = total;
        order.quantity = quantity;
        orderRequest.saveOrder(order)
        .then((response) =>{
            console.log(response.data);
        }).catch((error) =>{
            console.error(error.message);
        })
    }  

  return item && user ?(
    <>
        <NavBar/>
        <br/>
        <h1 className={style.heading}>Reserve Now</h1>
        <br/>
        <center>
        <div className='drop-shadow-xl '>
            <div className={style.reservation_container}>
                <h2 className={style.sub_heading}>User Details</h2><br/>
                <center>
                    <div className={style.user_detail_container}>
                        <div className='grid grid-flow-row-dense grid-cols-6'>
                            <div className='col-span-1 p-1'>
                                <h3 className={style.label}>First Name</h3>
                            </div>
                            <div className='col-span-2 p-1'>
                                <h4 className={style.label_data}>: {user.firstName}</h4>
                            </div>
                            <div className='col-span-1 p-1'>
                                <h3 className={style.label}>Last Name</h3>
                            </div>
                            <div className='col-span-2 p-1'>
                                <h4 className={style.label_data}>: {user.lastName}</h4>
                            </div>
                            <div className='col-span-1 p-1'>
                                <h3 className={style.label}>Email</h3>
                            </div>
                            <div className='col-span-2 p-1'>
                                <h4 className={style.label_data}>: {user.email}</h4>
                            </div>
                            <div className='col-span-1 p-1'>
                                <h3 className={style.label} >Contact No</h3>
                            </div>
                            <div className='col-span-2 p-1'>
                                <h4 className={style.label_data}>: {user.contactNo}</h4>
                            </div>
                        </div>
                    </div>
                </center><br/>
                <div class="flex-grow border-t border-gray-150"></div><br/>
                <h2 className={style.sub_heading}>Item Details</h2><br/>
                <center>
                <div className={style.user_detail_container}>
                    <div className='grid grid-flow-row-dense grid-cols-12'>
                        <div className='col-span-2'>
                            <img src={item.imageUrl} className={style.img_size} alt='Item'></img>
                        </div>
                        <div class=" p-1 col-span-9">
                        <br/>
                        <div className={style.user_detail_container}>
                            <div className='grid grid-flow-row-dense grid-cols-6'>
                                <div className='col-span-1 p-1'>
                                    <h3 className={style.label}>Item Name</h3>
                                </div>
                                <div className='col-span-5 p-1'>
                                    <h4 className={style.label_data}>: {item.name}</h4>
                                </div>
                                <div className='col-span-1 p-1'>
                                    <h3 className={style.label}>Seller's Name</h3>
                                </div>
                                <div className='col-span-5 p-1'>
                                    <h4 className={style.label_data}>: {seller.firstName} {seller.lastName}</h4>
                                </div>
                                <div className='col-span-1 p-1'>
                                    <h3 className={style.label}>Quantity</h3>
                                </div>
                                
                                <div className='col-span-2 p-1'>
                                <div class="custom-number-input h-10 w-32">
                                    <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                        <button onClick={handleDecrement} class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-7 w-10 rounded-l cursor-pointer outline-none">
                                            <span class="m-auto text-2xl font-thin">−</span>
                                        </button>
                                            <h4 className='px-2 py-0.5'> {quantity}</h4>
                                        <button onClick={handleIncrement} class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-7 w-10 rounded-r cursor-pointer">
                                            <span class="m-auto text-2xl font-thin">+</span>
                                        </button>
                                    </div>
                                    </div>
                                </div>
                                <div class="flex col-span-2 p-1">
                                <span class="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 h-9 w-10 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    LKR
                                </span>
                                <input type="text" name="total" class="rounded-none border p-0.5 h-9 w-full" placeholder="Price" value={total}/>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <br/>
                </center>
                <div class="flex-grow border-t border-gray-150"></div>    
                <div className='grid grid-cols-10 p-1'>
                    <div className='col-span-8'></div>
                    <div className='col-span-1 p-1 py-3'> 
                        <Button variant='default' onClick={handleSubmit}>Submit</Button>
                    </div>
                </div>
            </div>
        </div><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </center>
    </>
  ):(
    <div>
        <NavBar/>
        <br/>
            <h1 className={style.heading}>Reserve Now</h1>
        <br/>
            <h2>Error in loading data!</h2>
    </div>
  )
}
