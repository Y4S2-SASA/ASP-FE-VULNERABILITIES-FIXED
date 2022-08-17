import React, { useContext } from "react";
import { AuthContext } from "../../App";
import Button from "../../components/buttons/Buttons";
import NavBar from "../../components/LayoutComponents/NavBar";
import Error404 from "../error";

export default function AdminHome() {
    const loggedInUser = useContext(AuthContext);
    const {userId, role, proPic} = loggedInUser;

    const ServiceManagement = () => {
        return (
            <React.Fragment>
                <div className="bg-gray-300">
                <br />
                    <p className="ml-10 font-sans text-2xl font-semibold italic">System Management</p>
                    <div className="border-b-2 border-gray-900 mt-6"></div>
                    <br />
                    <div className="ml-10 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-col items-center pb-10">
                            <img className="mb-3 w-24 h-24" src="images/users.png" alt="Bonnie image"/>
                            <h5 className="mb-1 text-xl font-medium text-gray-500 dark:text-white font-semibold">Manage Users</h5>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go</a>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                </div>

                <div className="bg-gray-300">
                    <p className="ml-10 font-sans text-2xl font-semibold italic">Reports Management</p>
                    <div className="border-b-2 border-gray-900 mt-6"></div>
                    <br />
                    <div className="ml-10 flex flex-col md:flex-row space-x-20">
                        <div className="w-64 max-w-sm bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex flex-col items-center pb-10">
                                <img className="mb-3 w-24 h-24" src="images/statistics.png" alt="Bonnie image"/>
                                <h5 className="mb-1 text-xl font-medium text-gray-500 dark:text-white font-semibold">Users Report</h5>
                                <div className="flex mt-4 space-x-3 md:mt-6">
                                    <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go</a>
                                </div>
                            </div>
                        </div>
                        <div className="w-64 max-w-sm bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex flex-col items-center pb-10">
                                <img className="mb-3 w-24 h-24" src="images/statistics.png" alt="Bonnie image"/>
                                <h5 className="mb-1 text-xl font-medium text-gray-500 dark:text-white font-semibold">Order Report</h5>
                                <div className="flex mt-4 space-x-3 md:mt-6">
                                    <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go</a>
                                </div>
                            </div>
                        </div>
                        <div className="w-64 max-w-sm bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex flex-col items-center pb-10">
                                <img className="mb-3 w-24 h-24" src="images/statistics.png" alt="Bonnie image"/>
                                <h5 className="mb-1 text-xl font-medium text-gray-500 dark:text-white font-semibold">Items Report</h5>
                                <div className="flex mt-4 space-x-3 md:mt-6">
                                    <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go</a>
                                </div>
                            </div>
                        </div>
                        <div className="w-64 max-w-sm bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex flex-col items-center pb-10">
                                <img className="mb-3 w-24 h-24" src="images/statistics.png" alt="Bonnie image"/>
                                <h5 className="mb-1 text-xl font-medium text-gray-500 dark:text-white font-semibold">Questions Report</h5>
                                <div className="flex mt-4 space-x-3 md:mt-6">
                                    <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                </div>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
        {role === 'ADMIN' ? 
            <React.Fragment>
                <NavBar />
                <ServiceManagement />
            </React.Fragment>
            :
            <Error404 />
        }
        </React.Fragment>
    );

}