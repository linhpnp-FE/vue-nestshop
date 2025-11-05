// src/api/products.ts
import { http } from './http';

// Lấy danh sách sản phẩm
export async function getProducts(params?: Record<string, any>) {
    const res = await http.get('/products', { params });
    return res.data;
}

// Lấy chi tiết 1 sản phẩm
export async function getProductDetail(id: number | string) {
    const res = await http.get(`/products/${id}`);
    return res.data;
}
