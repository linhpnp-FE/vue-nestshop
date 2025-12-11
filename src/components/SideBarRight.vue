<script setup>
import { ref, onMounted } from "vue";


import icon1 from "../../public/images/icons/baking.svg";
import icon2 from "../../public/images/icons/bread.svg";
import icon3 from "../../public/images/icons/clothing.svg";
import icon4 from "../../public/images/icons/deals-of-day.svg";
import icon5 from "../../public/images/icons/fresh-fruit.svg";
import icon6 from "../../public/images/icons/fresh-seafood.svg";
import icon7 from "../../public/images/icons/milk-dairies.svg";
import icon8 from "../../public/images/icons/pet-foods.svg";
import icon9 from "../../public/images/icons/vegetables.svg";
import icon10 from "../../public/images/icons/wines-drinks.svg";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

const localIcons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10];

const fallbackSlides = [
  { title: 'Baking material', img: localIcons[0], count: 5 },
  { title: 'Bread and Juice', img: localIcons[1], count: 8 },
  { title: 'Clothing & beauty', img: localIcons[2], count: 5 },
  { title: 'Deals Of The Day', img: localIcons[3], count: 3 },
  { title: 'Fresh Fruit', img: localIcons[4], count: 4 },
  { title: 'Fresh Seafood', img: localIcons[5], count: 5 },
  { title: 'Milks and Dairies', img: localIcons[6], count: 2 },
  { title: 'Pet Foods & Toy', img: localIcons[7], count: 11 },
  { title: 'Vegetables', img: localIcons[8], count: 6 },
  { title: 'Wines & Drinks', img: localIcons[9], count: 5 },
  { title: 'Fresh Fruit', img: localIcons[4], count: 4 },
];

// 1. Dùng useFetch để lấy dữ liệu danh mục
// Thay thế URL này bằng API thực tế của bạn
const { data: categories, pending, error } = await useFetch('https://jsonplaceholder.typicode.com/todos?_limit=10');


// 2. Ánh xạ dữ liệu API về cấu trúc slides
const listCategories = computed(() => {
  // Trả về dữ liệu trống nếu đang tải hoặc lỗi
  if (pending.value || error.value || !categories.value || categories.value.length === 0) {
    // Tùy chọn: Dùng dữ liệu cứng làm fallback nếu API lỗi
    return fallbackSlides;
  }

  // Ánh xạ dữ liệu API
  return categories.value.map((item, index) => {
    // Nếu dùng JSONPlaceholder todos: item sẽ có title, id, completed
    const defaultTitle = `Todo Item ${index + 1}`;
    const defaultCount = item.id; // Dùng ID làm số lượng item

    return {
      title: item.title || defaultTitle, // Lấy từ trường 'title'
      // Sử dụng hình ảnh cục bộ dựa trên index
      img: localIcons[index % localIcons.length],
      count: defaultCount,
    };
  });
});

</script>

<template>
  <div class="shadow rounded-lg p-6 mb-6">
    <div class="pb-3 border-b border-gray-50 after after:w-20 after:h-[1px] after:bg-min-50">Category</div>
    <div v-for="(s,i) in listCategories" :key="i" class="last:border-0 border-b border-gray-50 py-2 flex items-center justify-between gap-3">
      <div class="flex items-center gap-2">
        <img :src="s.img" :alt="s.title" class="size-8 shrink-0">
        {{ s.title }}
      </div>
      <div class="size-6 bg-mint-3bb77e text-mint-3bb77e rounded-full flex items-center justify-center">{{ s.count }}</div>
      <div class="size-6 bg-mint-50">1</div>
      <div class="size-6 bg-[#3BB77E]">1</div>
    </div>
  </div>
  <div class="shadow p-6 rounded-lg">
    <div class="pb-3 border-b border-gray-50 after after:w-20 after:h-[1px] after:bg-min-50">Category</div>
    <div class="flex flex-wrap gap-2">
      <div v-for="(s,i) in listCategories" :key="i">{{ s.tag }}</div>
    </div>
  </div>
</template>

<style scoped>

</style>