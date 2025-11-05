// src/store/products.ts
import { defineStore } from 'pinia';
import { getProducts } from '@/api/products';

export const useProducts = defineStore('products', {
    state: () => ({ items: [] }),
    actions: {
        async fetch() {
            this.items = await getProducts();
        },
    },
});
