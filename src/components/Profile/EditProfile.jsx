import React from "react";
import { updateUser } from "../../api/UserApi";

export default function Editprofile(props) {
    // let data = props.user;

    const [user, setUser] = React.useState(props.user);
    
    const handleEditUser = () => {
        // props.setEditOpen(false);
        updateUser(user.id, user)
            .then((res) => {
                if (res.data.isSuccessful) {
                    // props.handleFindUsers();
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
    
    return (
       <>
       <form onSubmit={handleEditUser}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div>
                <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>

            <div>
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email Address</label>
                <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div>
                <label for="contact" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contact No</label>
                <input type="text" id="contact" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>

            <div>
                <label for="address1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address 1</label>
                <input type="text" id="address1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div>
                <label for="address2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address 2</label>
                <input type="text" id="address2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>

            <div>
                <label for="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">City</label>
                <input type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div>
                <label for="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">State / Province</label>
                <input type="text" id="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            </div>
        </form>
       </>
    );

}