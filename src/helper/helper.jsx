import jwt_decode from "jwt-decode";

export const getAuth = () => {
    const token = localStorage.getItem('token');
    return token ? jwt_decode(token) : "Authentication Failed!";
}

export const getLoggedUserRole = () => {
    const user = localStorage.getItem('userRole');
    return user ? user : "No user data found!";
}

export const getLoggedUserProfilePic = () => {
    const user = localStorage.getItem('profilePic');
    return user ? user : "No user data found!";
}