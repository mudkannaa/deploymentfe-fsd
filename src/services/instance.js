import axios from "axios";
import getToken from '../utils/authUtils';

const baseURL = 'https://be-k6vw.onrender.com/api';

const authInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});

const protectedInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
});

protectedInstance.interceptors.request.use(
    config => {
        const token = getToken();

        if (token) {
            config.headers['Authorization'] = '' + token;
        }

        return config;
    },

    error => {
        Promise.reject(error);
    }
);

export default {
    authInstance,
    protectedInstance
};