import React, { useState, useEffect } from 'react'
import NavBar from '../../components/LayoutComponents/NavBar'
import _ from 'lodash';
import Table from '../../components/Table/Table';
import { findUsers } from '../../api/User/userApi';
import Editprofile from '../../components/Profile/EditProfile';
import Dialog from '../../components/dialog/Dialog';
import { applyToast } from '../../components/toast-message/toast';

export default function ViewAllUsers() {
    const [user, setUser] = React.useState([]);
    const [users, setUsers] = React.useState([]);
    const [apiResponseWaiting, setApiResponseWaiting] = React.useState(false);

    const pageSize = 5;
    const [paginatedOrders, setPaginatedOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [editModelOpen, setEditModelOpen] = React.useState(false);

    const pageCount = users ? Math.ceil(users.length/pageSize) : 0;
    const pages = _.range(1, pageCount + 1);

    useEffect(() => {
        if(pageCount === 1) return null; 
    }, [pageCount]);

    useEffect(() => {
        getUsers();
    }, []);
    
    const getUsers = () => {
        setApiResponseWaiting(true);
        findUsers()
          .then(res => {
            if(res.data.isSuccessful) {
                let userData = res.data.responseData;
                console.log(userData)
                setUsers(userData);
                setPaginatedOrders(_(userData).slice(0).take(pageSize).value());
                userData? setTimeout(function(){
                    setApiResponseWaiting(false);
                }, 500) : setApiResponseWaiting(false) && applyToast('Fetching failed. Try again!', 'error');
            } else {
                console.error("error");
            }
          })
          .catch(() => console.log("couldn't fetch"));
    };

    const pagination = (pageNo) =>{
        setCurrentPage(pageNo)
        const startIndex = (pageNo -1) * pageSize;
        const paginatedOrder = _(users).slice(startIndex).take(pageSize).value();
        setPaginatedOrders(paginatedOrder);
    };

    const setEditingUser = (payload) => {
        setUser(payload);
        setEditModelOpen(true);
    };

  return (
    <>
        <NavBar/>
        <br/>
        <div className="bg-gray-100">
            <div className='max-w-7xl mx-auto px-10 sm:px-10 lg:px-6'>
                <div className="max-w-2xl mx-auto py-5 lg:max-w-none">
                    <div className='lg:grid lg:grid-cols-2'>
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
                    </div><br/>
                    <div>
                        <Table
                            head={
                                <>
                                    <tr>
                                        <th scope="col" className="py-3 px-6">#</th>
                                        <th scope="col" className="py-3 px-6">User ID</th>
                                        <th scope="col" className="py-3 px-6">User Name</th>
                                        <th scope="col" className="py-3 px-6">Email</th>
                                        <th scope="col" className="py-3 px-6">Contact</th>
                                        <th scope="col" className="py-3 px-6">User Role</th>
                                        <th scope="col" className="py-3 px-6">Actions</th>
                                    </tr>
                                </>
                            }
                            body={
                                apiResponseWaiting ?
                                    <>
                                        <center>
                                            <div className="flex justify-center items-center">
                                                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-red-800" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>
                                        </center>
                                    </> : 
                                    <>
                                        {paginatedOrders.map((user) =>(
                                            <tr className='self-center'>
                                                <td className='py-4 px-6'>
                                                    <img src={user?.pic} className="rounded-full w-10 shadow-lg" alt="Avatar" />
                                                </td>
                                                <td className='py-4 px-6'>{user?._id?.substring(0, 6) || '-'}</td>
                                                <td className='py-4 px-6'>{(user?.firstName + " " + user?.lastName)}</td>
                                                <td className='py-4 px-6'>{user?.email}</td>
                                                <td className='py-4 px-6'>{user?.contactNo}</td>
                                                <td className='py-4 px-6'>{user?.role}</td>
                                                <td className='py-4 px-6'>
                                                    <button className="" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile" onClick={() => setEditingUser(user)}>
                                                        <img src="images/edit.jpg" className="rounded-full w-6 h-6 shadow-lg" alt="Edit" user={user}/>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </>
                            }
                            currentPage={currentPage}
                            pageCount={pageCount}
                            pages={pages}
                            pagination={pagination}
                        />
                    </div>
                </div>
                {editModelOpen &&
                    <Dialog onClose={() => setEditModelOpen(false)}>
                        <Editprofile userDetails={user} handleGetUser={getUsers} setEditModelOpen={setEditModelOpen}/>
                    </Dialog>
                }
            </div>
        </div><br/>
    </>
  )
}
