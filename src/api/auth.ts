// src/api/auth.ts
import { http } from './http';

// Đăng nhập (fake)
export async function login(email: string, password: string) {
    const res = await http.post('/auth/login', { email, password });
    return res.data;
}

// Lấy thông tin user hiện tại (nếu có)
export async function getCurrentUser() {
    const res = await http.get('/me');
    return res.data;
}
