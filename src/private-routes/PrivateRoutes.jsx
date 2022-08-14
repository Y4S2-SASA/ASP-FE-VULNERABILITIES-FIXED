import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../App';
import { 
    getAuth,
    getLoggedUserRole
} from '../helper/helper';

export default function PrivateRoutes() {
    // Todo: takes currently logged in user's id and role from localstorage or however - @Amantha
    // Uda todo eka done - @Shehannn
    const userId = getAuth()._id;
    const role = getLoggedUserRole(); //localStorage.getItem("role");
    const loggedInUser = {
        userId,
        role
    }
    console.log(loggedInUser);
    // When you provide loggedInUser object to AuthContext like below, Other child components will be able to get loggedInUser
    return (
        <AuthContext.Provider value={loggedInUser}>
            {userId ? <Outlet  /> : <Navigate to="/login" />};
        </AuthContext.Provider>
    )
}