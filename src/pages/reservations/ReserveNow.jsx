import React from 'react'
import NavBar from '../../components/LayoutComponents/NavBar';
import style from "./reservation.module.css"
import Button from '../../components/buttons/Buttons';

export default function ReserveNow() {
  return (
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
                                <h3 className={style.lable}>First Name</h3>
                            </div>
                            <div className='col-span-2 p-1'>
                                <h4 className={style.lable_data}>: Test</h4>
                            </div>
                            <div className='col-span-1 p-1'>
                                <h3 className={style.lable}>Last Name</h3>
                            </div>
                            <div className='col-span-2 p-1'>
                                <h4 className={style.lable_data}>: User</h4>
                            </div>
                            <div className='col-span-1 p-1'>
                            <h3 className={style.lable}>Email</h3>
                            </div>
                            <div className='col-span-2 p-1'>
                            <h4 className={style.lable_data}>: testuser@gmail.com</h4>
                            </div>
                            <div className='col-span-1 p-1'>
                            <h3 className={style.lable} >Contact No</h3>
                            </div>
                            <div className='col-span-2 p-1'>
                            <h4 className={style.lable_data}>: 0776452185</h4>
                            </div>
                        </div>
                    </div>
                </center>
                <br/>
                <div class="flex-grow border-t border-gray-150"></div>
                <br/>
                <h2 className={style.sub_heading}>Item Details</h2><br/>
                <center>
                <div className={style.user_detail_container}>
                    <div className='grid grid-flow-row-dense grid-cols-12'>
                        <div className='col-span-2'>
                            <img src="https://www.24hourstyreservice.com/catalog/view/theme/default/image/suspension01.jpg" className={style.img_size} alt='image'></img>
                        </div>
                        <div class=" p-1 col-span-9">
                        <br/>
                        <div className={style.user_detail_container}>
                            <div className='grid grid-flow-row-dense grid-cols-6'>
                                <div className='col-span-1 p-1'>
                                    <h3 className={style.lable}>Item Name</h3>
                                </div>
                                <div className='col-span-5 p-1'>
                                    <h4 className={style.lable_data}>: Item 01</h4>
                                </div>
                                <div className='col-span-1 p-1'>
                                    <h3 className={style.lable}>Seller's Name</h3>
                                </div>
                                <div className='col-span-5 p-1'>
                                    <h4 className={style.lable_data}>: Test Seller</h4>
                                </div>
                                <div className='col-span-1 p-1'>
                                    <h3 className={style.lable}>Quantity</h3>
                                </div>
                                <div className='col-span-2 p-1'>
                                    <input className='p-1 h-7 w-10' type='number'/>
                                </div>
                                <div class="flex col-span-2 p-1">
                                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    LKR
                                </span>
                                <input type="text" id="website-admin" class="rounded-none border p-0.5" placeholder="Price"/>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <br/>
                </center>
                <div class="flex-grow border-t border-gray-150"></div>    
                <div className='grid grid-cols-12 p-1'>
                    <div className='col-span-11'> </div>
                    <div className='col-span-1 p-1'> 
                        <Button variant='default'>Submit</Button>
                    </div>
                </div>
            </div>
        </div><br/>
        </center>
    </>
  )
}
