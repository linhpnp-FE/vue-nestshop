<script setup lang="ts">
import { onMounted } from 'vue';
import { getProducts } from '@/api/products';
import { login } from '@/api/auth';

onMounted(async () => {
  const products = await getProducts();
  console.log('🪄 Products:', products);

  const user = await login('demo@furnishop.com', '123456');
  console.log('🧑‍💼 Login:', user);
});
</script>

<template>
  <main class="p-6 text-gray-800">
    <h1 class="text-2xl font-semibold">Test API Mock Server</h1>
    <p>Kiểm tra console (F12) để xem dữ liệu trả về từ Postman mock.</p>
  </main>
</template>
