<script setup>
import { ref, computed } from 'vue'

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
const { data: rawProducts, pending, error } = await useFetch('https://fakestoreapi.com/products?limit=15');
const selectedCategory = ref('All'); // Khai báo trạng thái danh mục đang được chọn
// 2. Khai báo danh sách các tab danh mục
const categoryTabs = [
  'All',
  'electronics',      // Tên danh mục từ API
  'jewelery',         // Tên danh mục từ API
  "men's clothing",   // Tên danh mục từ API
  "women's clothing", // Tên danh mục từ API
];


const allProducts = computed(() => {
  // Nếu dữ liệu API chưa có hoặc lỗi, trả về fallback.
  // Chúng ta không kiểm tra pending/error ở đây vì nó được xử lý trong listProducts.
  if (!rawProducts.value || rawProducts.value.length === 0) {
    // Tùy chọn: Dùng fallbackSlides (dữ liệu cứng) nếu không có dữ liệu
    return fallbackSlides;
  }

  // Ánh xạ dữ liệu từ Fake Store API
  return rawProducts.value.map((item, index) => {
    // Tạo giá bán giả định (giảm 15%)
    const priceSale = (item.price * 0.85).toFixed(2);

    return {
      id: item.id,
      title: item.title,
      img: item.image, // URL hình ảnh từ API
      category: item.category, // Dùng trường này để lọc
      price: item.price.toFixed(2),
      pricesale: priceSale,
      sale: Math.floor(Math.random() * 15) + 5, // % sale ngẫu nhiên (5-20%)
      rating: item.rating.rate,
      company: 'NestMart Inc.',
      tag: item.category.split(' ')[0].toUpperCase(), // Tag từ category
    };
  });
});
// 2. Hàm để thay đổi danh mục đang được chọn
const filterProducts = (categoryKey) => {
    selectedCategory.value = categoryKey;
};

// 3. Biến computed chính dùng trong template
const listProducts = computed(() => {
    // Nếu API đang lỗi hoặc chưa tải, trả về fallback (quan trọng)
    if (pending.value || error.value || !allProducts.value || allProducts.value.length === 0) {
        return fallbackSlides; 
    }

    const products = allProducts.value;

    if (selectedCategory.value === 'All') {
        return products;
    }

    // Lọc theo trường category từ dữ liệu API
    const categoryToFilter = selectedCategory.value.toLowerCase();
    
    return products.filter(product => {
        // Kiểm tra xem tên danh mục API (category) có chứa từ khóa lọc không
        return product.category.toLowerCase().includes(categoryToFilter);
    });
});

</script>

<template>
<div>
  <div class="flex justify-between">
    <h2>Popular Products</h2>
    <div class="flex gap-3 items-center">
      <!-- click để lọc list -->
      <div 
        v-for="categoryName in categoryTabs" 
        :key="categoryName"
        @click="filterProducts(categoryName)"
        :class="{ 
            'font-bold text-mint-3bb77e border-b-2 border-mint-3bb77e': selectedCategory === categoryName
        }"
        class="cursor-pointer pb-1 transition-colors whitespace-nowrap"
    >
        {{ categoryName }}
    </div>
    </div>
  </div>
  <div v-if="pending" class="text-center py-10">Đang tải sản phẩm...</div>
  <div v-else-if="error" class="text-center text-red-500 py-10">Lỗi tải dữ liệu sản phẩm.</div>
  <div class="grid grid-cols-5 gap-4">
  <div v-for="(s,i) in listProducts" :key="i" class="border border-gray-200 rounded-xl relative flex flex-col gap-2 items-center py-2 px-3">
      <div class="absolute top-0 left-0">{{ s.sale }}%</div>
      <img :src="s.img" :alt="s.title" class="size-16">
      {{ s.tag }}
      {{ s.title }}
      {{ s.rating }}
      <div>By {{ s.company }}</div>
      <div class="flex items-center">
        {{ s.price }}
        {{ s.pricesale }}
        <button type="submit">
          <Icon name="lucide:cart"></Icon>
        </button>
      </div>
    </div>
  </div>
  <div v-if="!pending && listProducts.length === 0" class="text-center py-10">Không tìm thấy sản phẩm nào trong danh mục này.</div>
</div>
</template>

<style scoped>

</style>