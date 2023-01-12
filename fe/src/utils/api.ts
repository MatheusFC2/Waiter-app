/* eslint-disable linebreak-style */
/* eslint-disable indent */
import axios from 'axios';


export const api = axios.create({
    baseURL: 'http://192.168.0.4:3001',
});
