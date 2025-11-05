<!-- src/views/TestApi.vue -->
<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(() => console.log('TestApi mounted'));
</script>

<template>
  <main class="p-6">
    <h1 class="text-xl font-semibold">Test API Mock Server</h1>
    <p>Nếu thấy dòng này là route đã render.</p>
  </main>
</template>
