import React, { useContext, useEffect } from "react"
import { fetchUser, findUsers, updateUser } from "../../api/User/userApi";
import { AuthContext } from "../../App"
import NavBar from "../../components/LayoutComponents/NavBar";
import ProfileSideNav from "../../components/Profile/ProfileSideNav";

export default function Profile() {
    const loggedInUser = useContext(AuthContext);
    const {userId, role} = loggedInUser;
    const [user, setUser] = React.useState([]);

    useEffect(() => {
        getUser();
    }, [userId]);
    
    const getUser = () => {
        findUsers(`id=${userId}`)
          .then(res => {
            if(res.data.isSuccessful) {
                let userData = res.data.responseData;
                for (var valueObj = 0; valueObj < userData?.length; valueObj++) {
                    if (userData[valueObj]._id === userId) {
                        console.log(userData[valueObj]);
                        setUser(userData[valueObj]);
                    }
                }
            } else {
                console.error("error");
            }
          })
          .catch(() => console.log("couldn't fetch"));
    }

    const handleEditUser = () => {
        // props.setEditOpen(false);
        updateUser(user.id, user)
            .then((res) => {
                if (res.data.isSuccessful) {
                    getUser();
                }
            })
            .catch((e) => console.log(e));
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        switch(name) {
            case 'firstName': {
                setUser({...user, firstName: value});
                break;
            }
            case 'lastName': {
                setUser({...user, lastName: value});
                break;
            }
            case 'email': {
                setUser({...user, email: value});
                break;
            }
            case 'contactNo': {
                setUser({...user, contactNo: value});
                break;
            }
            case 'pic': {
                setUser({...user, pic: value});
                break;
            }
            case 'address1': {
                setUser({...user, address1: value});
                break;
            }
            case 'address2': {
                setUser({...user, address2: value});
                break;
            }
            case 'city': {
                setUser({...user, city: value});
                break;
            }
            case 'state': {
                setUser({...user, state: value});
                break;
            }
            default: {}
        }
    }

    useEffect(() => {
        EditUserDialog();
    }, []);

    const EditUserDialog = () => {
        return(
            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="editUserModal" tabindex="-1" aria-labelledby="exampleModalCenteredScrollable" aria-modal="true" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
                    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5 className="text-xl font-medium leading-normal text-gray-800" id="editUserModal">
                            Edit Profile
                        </h5>
                        <button type="button"
                        className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body relative p-4">
                        <form onSubmit={handleEditUser}>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                                    <input type="text" id="first_name" name="firstName" value={user.firstName} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                </div>
                                <div>
                                    <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                                    <input type="text" id="last_name" name="lastName" value={user.lastName} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                </div>

                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email Address</label>
                                    <input type="text" id="email" name="email" value={user.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                </div>
                                <div>
                                    <label for="contact" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contact No</label>
                                    <input type="text" id="contact" name="contactNo" value={user.contactNo} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                </div>

                                <div>
                                    <label for="address1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address 1</label>
                                    <input type="text" id="address1" name="address1" value={user.address1} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                </div>
                                <div>
                                    <label for="address2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address 2</label>
                                    <input type="text" id="address2" name="address2" value={user.address2} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                </div>

                                <div>
                                    <label for="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">City</label>
                                    <input type="text" id="city" name="city" value={user.city} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                </div>
                                <div>
                                    <label for="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">State / Province</label>
                                    <input type="text" id="state" name="state" value={user.state} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div
                        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                        <button type="button"
                            class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                            data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="submit"
                            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                            Update
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }

    const ProfileDetails = () => {
        const getUserAddressDetailStr = () => {
            let userAddress = (user.address1 ? user.address1 + ",\n" : "-") + (user.address2 ? user.address2 + ",\n" : "") + (user.city ? user.city + ",\n" : "");
            return userAddress && userAddress.length > 1 ? userAddress.substring(0, userAddress.length - 1) : userAddress;
           
        };
    
        return (
            <div className="ml-52 md:ml-64 mt-5">
                <div className="flex flex-col md:flex-row">
                    <img src={user.pic} className="rounded-full w-20 h-20 shadow-lg" alt="Avatar" />
                    <div>
                        <p className="mt-7 ml-0 md:ml-8">{(user.firstName + " " + user.lastName) + " " + "("+ user.username + ")"}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <p className="mt-6 italic w-max">User Information</p>
                    <button className="ml-0 md:ml-96" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile">
                        <img src="images/edit.jpg" className="rounded-full w-8 h-8 shadow-lg hover:shadow-lg transition duration-150 ease-in-out" alt="Edit" user={user} data-bs-toggle="modal" data-bs-target="#editUserModal"/>
                    </button>
                </div>
                
                <div className="border-b-4"></div>
                <div className="flex flex-col md:flex-row space-x-0 md:space-x-40 mt-2 md:mt-0">
                    <figcaption className="flex justify-center items-center space-x-3 mt-5 md:mt-10 basis-1/2">
                    <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                        <span className="font-medium text-gray-600 dark:text-gray-300">N</span>
                    </div>
                        <div className="space-y-0.5 font-medium dark:text-white text-left w-80">
                            <div className="text-base font-bold text-gray-600">Full Name</div>
                            <div className="text-sm font-light text-gray-400 dark:text-gray-400">{(user.firstName + " " + user.lastName)}</div>
                            <div className="border-b-2 border-gray-300"></div>
                        </div>
                    </figcaption>
                    <figcaption className="flex justify-center items-center space-x-3 mt-5 md:mt-10 basis-1/2">
                        <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                            <span className="font-medium text-gray-600 dark:text-gray-300">E</span>
                        </div>
                        <div className="space-y-0.5 font-medium dark:text-white text-left w-80">
                            <div className="text-base font-bold text-gray-600">Email Address</div>
                            <div className="text-sm font-light text-gray-400 dark:text-gray-400">{user.email}</div>
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
                            <div className="text-sm font-light text-gray-400 dark:text-gray-400">{user.contactNo? user.contactNo : "-"}</div>
                            <div className="border-b-2 border-gray-300"></div>
                        </div>
                    </figcaption>
                    <figcaption className="flex justify-center items-center space-x-3 mt-5 md:mt-10 basis-1/2">
                        <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                            <span className="font-medium text-gray-600 dark:text-gray-300">R</span>
                        </div>
                        <div className="space-y-0.5 font-medium dark:text-white text-left w-80">
                            <div className="text-base font-bold text-gray-600">Profile Role</div>
                            <div className="text-sm font-light text-gray-400 dark:text-gray-400">{user.role}</div>
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
                            <div className="text-sm font-light text-gray-400 dark:text-gray-400">{user.state? user.state : "-"}</div>
                            <div className="border-b-2 border-gray-300"></div>
                        </div>
                    </figcaption>
                </div>
            </div>
        );
    }

    return (
        <>
            <NavBar />
            <div className="">
                <ProfileSideNav />
                <br />
                <ProfileDetails/>
                <EditUserDialog />
                <br />
                <br />
            </div>
        </>
    );
}