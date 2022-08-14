import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../App';

export default function PrivateRoutes() {
    // Todo: takes currently logged in user's id and role from localstorage or however - @Amantha
    // Uda todo eka done - @Shehannn
    const userId = "001" // localStorage.getItem("userId");
    const role = "admin"; //localStorage.getItem("role");

    const loggedInUser = {
        userId,
        role
    }

    // When you provide loggedInUser object to AuthContext like below, Other child components will be able to get loggedInUser
    return (
        <AuthContext.Provider value={loggedInUser}>
            {userId ? <Outlet  /> : <Navigate to="/login" />};
        </AuthContext.Provider>
    )
}