import axios from 'axios';

//BE Routes base Url
const USER_API_BASE_URL = "http://localhost:3001/api/questions";

export const createQuestion = (questionObj) => axios.post(USER_API_BASE_URL, questionObj);
export const getAllQuestions = () => axios.get(USER_API_BASE_URL);
export const getQuestionById = (id) => axios.get(USER_API_BASE_URL + `/${id}`);
export const updateQuestionById = (id, questionObj) => axios.put(USER_API_BASE_URL + `/${id}`, questionObj);
export const deleteQuestionById = (id) => axios.delete(USER_API_BASE_URL + `/${id}`);