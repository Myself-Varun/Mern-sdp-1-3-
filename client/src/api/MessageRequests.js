import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:7000' });

export const getMessages = (id) => API.get(`/message/${id}`);

export const addMessage = (data) => API.post('/message/', data);