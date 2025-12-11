<!-- src/views/auth/Login.vue -->
<script setup lang="ts">
import { ref } from 'vue';
import { login } from '@/api/auth';

const email = ref('demo@furnishop.com');
const password = ref('123456');
const loading = ref(false);
const error = ref<string| null>(null);

async function submit() {
  loading.value = true; error.value = null;
  try {
    const res = await login(email.value, password.value);
    console.log('Login result:', res);
    // TODO: lưu token vào Pinia, rồi push về trang trước
  } catch (e: any) {
    error.value = e?.response?.data || 'Login failed';
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <h1 class="text-xl font-semibold mb-4">Sign in</h1>
  <form class="space-y-3" @submit.prevent="submit">
    <input v-model="email" type="email" class="w-full h-10 border rounded px-3" placeholder="Email" />
    <input v-model="password" type="password" class="w-full h-10 border rounded px-3" placeholder="Password" />
    <button :disabled="loading" class="w-full h-10 rounded bg-black text-white">
      {{ loading ? 'Signing in...' : 'Sign in' }}
    </button>
    <p v-if="error" class="text-red-600 text-sm">{{ error }}</p>
  </form>
</template>
