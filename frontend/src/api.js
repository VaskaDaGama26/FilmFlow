import axios from "axios";
import { ACCESS_TOKEN } from './constants.js';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000',
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        } else {
            delete config.headers.Authorization; // Ensure no invalid token is sent
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const registerUser = async (username, password) => {
    return api.post('/register/', {
        username,
        password,
    });
};
export const loginUser = async (username, password) => {
    return api.post('/login/', {
        username,
        password,
    });
};
export const logoutUser = async () => {
    return api.post('/logout/');
};

export const fetchRooms = async () => {
    return api.get('/rooms/');
};
export const fetchSchedules = async (roomId) => {
    return api.get(`/rooms/${roomId}`);
};

export const fetchSeatMap = async (scheduleId) => {
    return api.get(`/seat_selection/${scheduleId}`);
};
export const bookSeat = async (scheduleId, row, number) => {
    return api.post(`/book_seat/${scheduleId}/${row}/${number}/`);
};

export default api;
