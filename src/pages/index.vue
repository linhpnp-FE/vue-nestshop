<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import banner1 from '../../public/images/banner-1.jpg'
import banner2 from '../../public/images/banner-2.jpg'
import ListProduct from "../components/ListProduct.vue";

const slides = [
  { title: 'Fresh Vegetables Big discount', des:'Sign up for the daily newsletter', img: banner1 },
  { title: 'Fresh Vegetables Big discount', des:'Sign up for the daily newsletter', img: banner2 },
]
const loop = true
const modules = [Navigation, Pagination, Scrollbar, A11y];
</script>

<template>
    <Swiper
        :modules="modules"
        :slides-per-view="1"
        :observer="true"
        :observeParents="true"
        :loop="loop"
        :pagination="{
        clickable: true
      }"
        class="h-[450px] xl:h-[538px] mb-8"
    >
      <SwiperSlide v-for="(s, i) in slides" :key="i" class="relative !w-full overflow-hidden">
        <div class="flex items-center justify-center h-full relative">
          <img :src="s.img" :alt="s.title" class="object-cover size-full" />
          <div class=" absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-full max-w-[700px] text-center mx-auto">
            <h2 class="mb-5 xl:mb-10 text-[72px] leading-[72px] font-bold text-gray-400">{{ s.title }}</h2>
            <p class="text-[30px] text-gray-300">{{ s.des }}</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  <LayoutContainer>
    <div class="flex gap-8">
      <div class="flex-1">
        <ListProduct></ListProduct>
      </div>
      <div class="w-full max-w-[302px] shrink-0">
        <SideBarRight></SideBarRight>
      </div>
    </div>
  </LayoutContainer>
  <ShopByCategory></ShopByCategory>
  <ListNote></ListNote>
</template>

<style scoped>
</style>