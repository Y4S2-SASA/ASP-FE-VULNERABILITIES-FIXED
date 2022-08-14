import jwt_decode from "jwt-decode";

export const getAuth = () => {
    const token = localStorage.getItem('token');
    return token ? jwt_decode(token) : null;
}