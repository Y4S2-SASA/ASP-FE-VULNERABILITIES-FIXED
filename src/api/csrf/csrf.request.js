import axios from "axios";

export const getCsrfToken = () => axios.get('http://localhost:3001/csrf-token');