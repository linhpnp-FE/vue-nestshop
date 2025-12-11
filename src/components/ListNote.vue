<script setup>
import icon1 from "../../public/images/icons/best-price.svg";
import icon2 from "../../public/images/icons/free-delivery.svg";

// 1. Dùng useFetch để gọi API
// Ví dụ: Lấy 5 bài post từ JSONPlaceholder
const { data: posts, pending, error } = await useFetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

// 2. Ánh xạ (Map) dữ liệu API về cấu trúc bạn muốn
const features = computed(() => {
  // Nếu dữ liệu chưa có, trả về mảng rỗng (hoặc dữ liệu mặc định)
  if (pending.value || error.value || !posts.value) {
    // Tùy chọn: Dùng dữ liệu cứng làm fallback nếu API lỗi
    return [
      { title: 'Fallback: Best prices', note:'Orders $50 or more', img: icon1 },
      // ... các item fallback khác
    ];
  }

  // Ánh xạ dữ liệu API về cấu trúc bạn đang dùng
  return posts.value.map((post, index) => ({
    title: post.title,                     // Lấy tiêu đề từ API
    note: post.body.substring(0, 40) + '...', // Lấy một phần nội dung
    img: index === 0 ? icon1 : (index === 1 ? icon2 : null) // Dùng hình ảnh cục bộ tạm thời, hoặc URL từ API nếu có
  }));
});
</script>

<template>
  <LayoutContainer class="py-6">
    <div v-if="pending" class="text-center text-lg">Đang tải dữ liệu...</div>

    <div v-else-if="error" class="text-center text-red-500">Lỗi tải dữ liệu: {{ error.message }}</div>
    <div class="flex gap-5">
      <div v-for="(s,i) in features" :key="i" class="flex-1 flex items-center justify-around gap-2 rounded-lg bg-gray-100 p-3">
        <img
            :src="s.img"
            alt=""
            class="size-10 object-contain shrink-0"
        >
        <div class="flex-1">
          <div class="font-semibold line-clamp-1">{{ s.title }}</div>
          <span class="text-sm text-gray-300 line-clamp-1">{{ s.note }}</span>
        </div>
      </div>
    </div>
  </LayoutContainer>
</template>

<style scoped>
</style>
