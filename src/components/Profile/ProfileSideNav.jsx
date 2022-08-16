
export default function ProfileSideNav() {
    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

    return (
        <div className="w-30 md:w-60 h-60 bg-white px-1 absolute">
            <ul className="relative w-30 md:w-60">
                <li className="relative">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="/profile" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                        <img src="/images/profile.svg" className="mr-2 md:mr-3 w-3 md:w-5 h-3 md:h-5"/>
                        <span className="text-xs md:text-sm">Profile</span>
                    </a>
                </li>
                <hr className="border-gray-200 dark:border-gray-700" />
                <li className="relative">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                        <img src="/images/reserve.svg" className="mr-2 md:mr-3 w-3 md:w-5 h-3 md:h-5"/>
                        <span className="text-xs md:text-sm">My Reservations</span>
                    </a>
                </li>
                <hr className="border-gray-200 dark:border-gray-700" />
                <li className="relative">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                        <img src="/images/requests.svg" className="mr-2 md:mr-3 w-3 md:w-5 h-3 md:h-5"/>
                        <span className="text-xs md:text-sm">Requests</span>
                    </a>
                </li>
                <hr className="border-gray-200 dark:border-gray-700" />
                <li className="relative">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" onClick={handleLogout} data-mdb-ripple="true" data-mdb-ripple-color="dark">
                        <img src="/images/logout.svg" className="mr-2 md:mr-3 w-3 md:w-5 h-3 md:h-5"/>
                        <span className="text-xs md:text-sm">Logout</span>
                    </a>
                </li>
                <hr className="border-gray-200 dark:border-gray-700" />
            </ul>
        </div>
    );
}