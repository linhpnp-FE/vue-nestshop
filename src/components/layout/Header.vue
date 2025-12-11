<script setup lang="ts">
import { MAIN_NAV, SECONDARY_NAV } from '@/constants/nav'
import Container from "@/components/layout/Container.vue";
import MobileNav from "@/components/layout/MobileNav.vue";
const fullNav = [...MAIN_NAV, ...SECONDARY_NAV];

const open = ref(false)
const route = useRoute() // auto-imported by Nuxt
const { classes } = useActiveClass()

const scrolled = ref(false)
const onScroll = () => {
  if (process.client) scrolled.value = window.scrollY > 4
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur" :class="scrolled ? 'shadow-sm' : ''">
    <div class="border-b border-gray-50 py-2">
      <Container>
        <div class="h-16 flex items-center justify-between">
          <!-- use NuxtLink, not RouterLink -->
          <NuxtLink to="/" class="h-[52px]">
            <img src="/images/logo/logo.svg" alt="Logo" class="size-full object-contain" />
          </NuxtLink>

          <div class="flex items-center gap-3 text-sm">
            <div class="flex items-center gap-2">
              <Icon name="lucide:git-compare" class="size-6" /> Compare
            </div>
            <div class="flex items-center gap-2">
              <Icon name="lucide:heart" class="size-6" /> Wishlist
            </div>
            <div class="flex items-center gap-2">
              <Icon name="lucide:shopping-cart" class="size-6" /> Cart
            </div>
            <div class="flex items-center">
              <Icon name="lucide:user" class="size-6" /> Account
            </div>
          </div>
        </div>
      </Container>
    </div>

    <Container class="py-1">
      <div class="flex items-center justify-between gap-2">
        <div class="flex-1 flex items-center">
          <nav class="hidden md:flex items-center gap-6">
            <NuxtLink
                v-for="item in MAIN_NAV"
                :key="item.name"
                :to="item.to"
                :class="classes(item.to)"
            >
              {{ item.name }}
            </NuxtLink>
          </nav>
          <!-- rest of header -->
        </div>

        <div>
          <button class="md:hidden inline-flex items-center justify-center h-10 w-10 rounded border" @click="open = true">☰</button>
        </div>
      </div>
    </Container>

    <MobileNav :open="open" @close="open = false" :nav="fullNav" />
  </header>
</template>
