<script setup lang="ts">

// ... (Giữ nguyên các định nghĩa props và emit) ...
type RouteTarget = string | {
  name: string;
  params?: any;
  query?: any;
  path?: string;
};

const props = defineProps<{
  open: boolean
  nav: {
    name: string;
    to: RouteTarget;
  }[]
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const route = useRoute()

// ⭐️ THÊM HÀM NÀY: Kiểm tra link active một cách an toàn và gọn gàng
const isActiveLink = (item: typeof props.nav[number]) => {
  // 1. Kiểm tra item.to có phải là object và không phải là null không
  if (typeof item.to === 'object' && item.to !== null) {
    // 2. Nếu là object, so sánh route name
    return route.name === item.to.name;
  }

  // 3. Nếu là string (path), so sánh fullPath
  if (typeof item.to === 'string') {
    // Lưu ý: Có thể dùng route.path hoặc route.fullPath.
    // Dùng fullPath để đảm bảo độ chính xác hơn (bao gồm query).
    return route.fullPath === item.to;
  }

  return false;
}
</script>

<template>
  <nav class="p-2 hidden">
    <NuxtLink
        v-for="item in props.nav"
        :key="item.name"
        :to="item.to"
        class="block px-4 py-3 rounded text-base transition"
        :class="
              isActiveLink(item)
                ? 'bg-black text-white'
                : 'text-black/80 hover:bg-black/5'
            "
        @click="emit('close')"
    >
      {{ item.name }}
    </NuxtLink>
  </nav>
</template>