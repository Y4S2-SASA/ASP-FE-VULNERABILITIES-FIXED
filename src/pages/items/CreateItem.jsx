import React from "react";
import NavBar from "../../components/LayoutComponents/NavBar";

const CreateItem = () => {
    return(
        <div>
            <NavBar />
            <br/>
            <div className="block pl-20 pr-20 pt-10 pb-10 max-w-8xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="text-xl font-semibold">
                Create an Item
            </div>
            <div className="pt-10 text-xl sm:px-0 lg:px-24">
                <div className="mb-6">
                <label
                    htmlFor="name"
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                    Enter Item Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Ex: Steering Wheel"
                    required=""
                />
                </div>

                <div className="mb-6">
                <label
                    htmlFor="price"
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                    Enter Item Price
                </label>

                <div className="flex">
                    <span className="inline-flex items-center px-3 text-lg text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    LKR
                    </span>
                    <input
                    type="text"
                    id="price"
                    className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-lg border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ex: 7000"
                    />
                </div>
                </div>

                <div className="mb-6">
                <label
                    htmlFor="quantity"
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                    Enter Item Quantity
                </label>
                <input
                    type="text"
                    id="quantity"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Ex: 10"
                    required=""
                />
                </div>

                <div className="mb-6">
                <label
                    htmlFor="description"
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                    Enter Item Description
                </label>
                <textarea
                    type="text"
                    id="description"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Ex: A good choice for your vehicle. Contact us through mobile number - 0761234567"
                    required=""
                />
                </div>

                <div className="mb-6">
                <label
                    htmlFor="quantity"
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                    Upload Item Image
                </label>
                <input
                    className="block w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help"
                    id="image"
                    type="file"
                />
                </div>
                <br/>

                <div className="flex flex-row-reverse">   
                <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                Save
                </button>

                <div className="pr-4">
                   <button
                    type="button"
                    className="py-2.5 px-5 mr-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-500 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                    Cancel
                    </button> 
                </div>
                </div>
                
            </div>
            </div>
            <br/><br/>
        </div>
    );
}

export default CreateItem;