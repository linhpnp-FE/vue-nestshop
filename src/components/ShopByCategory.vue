<script setup>
import { ref, computed } from 'vue'
import Container from "@/components/layout/Container.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
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
const slides = computed(() => {
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

const loop = true;
const breakpoints = {
  0: { slidesPerView: 1, spaceBetween: 8 },
  640: { slidesPerView: 2, spaceBetween: 12 },
  768: { slidesPerView: 3, spaceBetween: 12 },
  1280: { slidesPerView: 8, spaceBetween: 20 },
};
const modules = [Navigation, Pagination, Scrollbar, A11y];

const swiperRef = ref(null)
const onSwiper = (swiper) => {
  swiperRef.value = swiper
}

function prev() {
  if (!swiperRef.value) return
  swiperRef.value.slidePrev()
}
function next() {
  if (!swiperRef.value) return
  swiperRef.value.slideNext()
}

// computed for disabling buttons when not loop and at ends
const isBeginning = computed(() => {
  if (!swiperRef.value) return false
  return swiperRef.value.isBeginning
})
const isEnd = computed(() => {
  if (!swiperRef.value) return false
  return swiperRef.value.isEnd
})
</script>

<template>
  <Container class="py-6">
    <div v-if="pending" class="text-center py-10">Đang tải danh mục...</div>
    <div v-else-if="error" class="text-center text-red-500 py-10">Lỗi tải dữ liệu danh mục.</div>

    <div v-else>
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-3">
          <h2 class="font-bold">Shop by Categories</h2>
          <NuxtLink to="" class="flex items-center gap-2 text-mint-3bb77e">
            All Categories
            <Icon name="lucide:chevron-right"></Icon>
          </NuxtLink>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" @click="prev" :disabled="!loop && isBeginning"
            class="bg-gray-50 rounded-full size-10 overflow-hidden flex items-center justify-center"
            aria-label="Previous">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M15 18l-6-6 6-6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          <button type="button" @click="next" :disabled="!loop && isEnd"
            class="bg-gray-50 rounded-full size-10 overflow-hidden flex items-center justify-center"
            aria-label="Next">
            <svg class="w-4 h-4 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M15 18l-6-6 6-6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex items-center justify-between mb-4">
      </div>
      <Swiper :modules="modules" :loop="loop" :breakpoints="breakpoints" @swiper="onSwiper">
        <SwiperSlide v-for="(s, i) in slides" :key="i" class="h-auto!">
          <div class="h-full flex flex-col items-center gap-2 rounded-lg bg-gray-100 p-3 text-center">
            <div class="shrink-0">
              <img :src="s.img" :alt="s.title" class="size-10">
            </div>
            <div class="flex-1">
              <div class="font-semibold line-clamp-2">{{ s.title }}</div>
              <span class="text-sm text-gray-300">{{ s.count }} items</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </Container>
</template>

<style scoped>
:deep(.swiper-wrapper) {
  align-items: stretch;
}
</style>
