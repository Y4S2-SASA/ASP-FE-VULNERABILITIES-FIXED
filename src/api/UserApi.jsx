import axios from 'axios';

//BE Routes base Url
const USER_API_BASE_URL = "https://automobile-spare-parts-web.herokuapp.com/api/users";

export const loginUser = (authObj) => axios.post(USER_API_BASE_URL + '/login', authObj);
export const registerUser = (userObj) => axios.post(USER_API_BASE_URL + '/register', userObj);
export const findUsers = (queryParams) => axios.get(USER_API_BASE_URL + `?${queryParams}`);
export const fetchUser = (id, payload) => axios.get(USER_API_BASE_URL + `/${id}`, payload);
export const updateUser = (id, userObj) => axios.put(USER_API_BASE_URL + `/${id}`, userObj);