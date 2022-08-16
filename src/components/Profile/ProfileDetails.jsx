export default function ProfileDetails(props) {
    let data = props.user;

    const getUserAddressDetailStr = () => {
        let userAddress = (data.address1 ? data.address1 + ",\n" : "-") + (data.address2 ? data.address2 + ",\n" : "") + (data.city ? data.city + ",\n" : "");
        return userAddress && userAddress.length > 1 ? userAddress.substring(0, userAddress.length - 1) : userAddress;
       
    };

    return (
        <div className="ml-52 md:ml-64 mt-5">
        <div className="flex flex-col md:flex-row">
            <img src={data.pic} class="rounded-full w-20 h-20 shadow-lg" alt="Avatar" />
            <div>
                <p className="mt-7 ml-0 md:ml-8">{(data.firstName + " " + data.lastName) + " " + "("+ data.username + ")"}</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <p className="mt-6 italic w-max">User Information</p>
            <a href="#" className="ml-0 md:ml-96" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile">
                <img src="images/edit.jpg" class="rounded-full w-8 h-8 shadow-lg" alt="Edit" />
            </a>
        </div>
        
        <div className="border-b-4"></div>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-40 mt-2 md:mt-0">
            <figcaption className="flex justify-center items-center space-x-3 mt-5 md:mt-10 basis-1/2">
            <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">N</span>
            </div>
                <div className="space-y-0.5 font-medium dark:text-white text-left w-80">
                    <div className="text-base font-bold text-gray-600">Full Name</div>
                    <div className="text-sm font-light text-gray-400 dark:text-gray-400">{(data.firstName + " " + data.lastName)}</div>
                    <div className="border-b-2 border-gray-300"></div>
                </div>
            </figcaption>
            <figcaption className="flex justify-center items-center space-x-3 mt-5 md:mt-10 basis-1/2">
                <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">E</span>
                </div>
                <div className="space-y-0.5 font-medium dark:text-white text-left w-80">
                    <div className="text-base font-bold text-gray-600">Email Address</div>
                    <div className="text-sm font-light text-gray-400 dark:text-gray-400">{data.email}</div>
                    <div className="border-b-2 border-gray-300"></div>
                </div>
            </figcaption>
            
        </div>

        <div className="flex flex-col md:flex-row space-x-0 md:space-x-40 mt-2 md:mt-0">
            <figcaption className="flex justify-center items-center space-x-3 mt-5 md:mt-10 basis-1/2">
                <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">C</span>
                </div>
                <div className="space-y-0.5 font-medium dark:text-white text-left w-80">
                    <div className="text-base font-bold text-gray-600">Contact No</div>
                    <div className="text-sm font-light text-gray-400 dark:text-gray-400">{data.contactNo? data.contactNo : "-"}</div>
                    <div className="border-b-2 border-gray-300"></div>
                </div>
            </figcaption>
            <figcaption className="flex justify-center items-center space-x-3 mt-5 md:mt-10 basis-1/2">
                <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">R</span>
                </div>
                <div className="space-y-0.5 font-medium dark:text-white text-left w-80">
                    <div className="text-base font-bold text-gray-600">Profile Role</div>
                    <div className="text-sm font-light text-gray-400 dark:text-gray-400">{data.role}</div>
                    <div className="border-b-2 border-gray-300"></div>
                </div>
            </figcaption>
        </div>

        <div className="flex flex-col md:flex-row space-x-0 md:space-x-40 mt-2 md:mt-0">
            <figcaption className="flex justify-center items-center space-x-3 mt-5 md:mt-10 basis-1/2">
                <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">A</span>
                </div>
                <div className="space-y-0.5 font-medium dark:text-white text-left w-80 ">
                    <div className="text-base font-bold text-gray-600">Address</div>
                    <div className="text-sm font-light text-gray-400 dark:text-gray-400">{getUserAddressDetailStr()}</div>
                    <div className="border-b-2 border-gray-300"></div>
                </div>
            </figcaption>
            <figcaption className="flex justify-center items-center space-x-3 mt-5 md:mt-10 basis-1/2">
                <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">S</span>
                </div>
                <div className="space-y-0.5 font-medium dark:text-white text-left w-80">
                    <div className="text-base font-bold text-gray-600">Province/State</div>
                    <div className="text-sm font-light text-gray-400 dark:text-gray-400">{data.state? data.state : "-"}</div>
                    <div className="border-b-2 border-gray-300"></div>
                </div>
            </figcaption>
        </div>
        </div>
    );
}