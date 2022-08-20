import axios from 'axios';

//BE Routes base Url
const USER_API_BASE_URL = "http://localhost:3001/api/questions";

export const createQuestion = (questionObj) => axios.post(USER_API_BASE_URL, questionObj);
export const getAllQuestions = () => axios.get(USER_API_BASE_URL);
export const getQuestionById = (id) => axios.get(USER_API_BASE_URL + `/${id}`);