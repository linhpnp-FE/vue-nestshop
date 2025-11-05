// src/api/http.ts
import axios from 'axios';

// Lấy URL mock từ biến môi trường (định nghĩa trong .env)
export const http = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'https://de185ce5-19e6-457d-b9c2-a2c68693c3c5.mock.pstmn.io',
    headers: {
        'Content-Type': 'application/json',
    },
});

// (Tuỳ chọn) interceptor log request/response — hữu ích khi debug
http.interceptors.request.use((config) => {
    console.log('➡️ Request:', config.method?.toUpperCase(), config.url);
    return config;
});
http.interceptors.response.use(
    (res) => {
        console.log('✅ Response:', res.status, res.config.url);
        return res;
    },
    (err) => {
        console.error('❌ API Error:', err.message);
        throw err;
    }
);
