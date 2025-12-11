<!-- src/components/layout/Footer.vue -->
<script setup lang="ts">
</script>

<template>
  <footer>
    <LayoutContainer>
      <div class="flex gap-8 pb-8">
        <div class="flex-1 flex gap-8">
          <div class="flex flex-col gap-5 w-[320px] flex-shrink-0">
            <NuxtLink to="/" class="h-[52px] w-max">
              <NuxtImg
                  src="/images/logo/logo.svg"
                  alt="Logo"
                  class="size-full object-contain"
              ></NuxtImg>
            </NuxtLink>
            <span>Awesome grocery store website template</span>
            <div class="flex flex-col gap-2">
              <div class="flex gap-1">
                <Icon name="lucide:map-pin-house" class="text-mint-3bb77e size-5"></Icon>
                <span>Address 5171 W Campbell Ave undefined Kent, Utah 53127 United States</span>
              </div>
              <div class="flex gap-1">
                <Icon name="lucide:headset" class="text-mint-3bb77e size-5"></Icon>
                <span>Call Us <a href="tel:(+91)-540-025-124553" class="text-mint-3bb77e">(+91)-540-025-124553</a></span>
              </div>
              <div class="flex gap-1">
                <Icon name="lucide:mail" class="text-mint-3bb77e size-5"></Icon>
                <span>Email <a href="mailto:sale@Nest.com" class="text-mint-3bb77e">sale@Nest.com</a></span>
              </div>
              <div class="flex gap-1">
                <Icon name="lucide:clock" class="text-mint-3bb77e size-5"></Icon>
                <span>Hours 10:00 - 18:00, Mon - Sat</span>
              </div>
            </div>
          </div>
          <div class="flex-1 flex gap-3">
            <div class="flex-1">
              <div class="font-semibold mb-3">Company</div>
              <ul class="flex flex-col gap-2">
                <li><NuxtLink to="" class="text-sm">About Us</NuxtLink></li>
                <li><NuxtLink to="" class="text-sm">Delivery Information</NuxtLink></li>
                <li><NuxtLink to="" class="text-sm">Privacy Policy</NuxtLink></li>
                <li><NuxtLink to="" class="text-sm">Terms & Conditions</NuxtLink></li>
                <li><NuxtLink to="" class="text-sm">Contact Us</NuxtLink></li>
                <li><NuxtLink to="" class="text-sm">Support Center</NuxtLink></li>
                <li><NuxtLink to="" class="text-sm">Careers</NuxtLink></li>
              </ul>
            </div>
            <div class="flex-1">
              <div class="font-semibold mb-3">Company</div>
              <ul class="flex flex-col gap-2">
                <li><NuxtLink to="" class="text-sm">About Us</NuxtLink></li>
                <li><NuxtLink to="" class="text-sm">Delivery Information</NuxtLink></li>
                <li><NuxtLink to="" class="text-sm">Privacy Policy</NuxtLink></li>
                <li><NuxtLink to="" class="text-sm">Terms & Conditions</NuxtLink></li>
                <li><NuxtLink to="" class="text-sm">Contact Us</NuxtLink></li>
                <li><NuxtLink to="" class="text-sm">Support Center</NuxtLink></li>
                <li><NuxtLink to="" class="text-sm">Careers</NuxtLink></li>
              </ul>
            </div>
            <div class="flex-1">
              <div class="font-semibold mb-3">Company</div>
              <ul class="flex flex-col gap-2">
                <li><NuxtLink to="" class="text-sm">About Us</NuxtLink></li>
                <li><NuxtLink to="" class="text-sm">Delivery Information</NuxtLink></li>
                <li><NuxtLink to="" class="text-sm">Privacy Policy</NuxtLink></li>
                <li><NuxtLink to="" class="text-sm">Terms & Conditions</NuxtLink></li>
                <li><NuxtLink to="" class="text-sm">Contact Us</NuxtLink></li>
                <li><NuxtLink to="" class="text-sm">Support Center</NuxtLink></li>
                <li><NuxtLink to="" class="text-sm">Careers</NuxtLink></li>
              </ul>
            </div>
            <div class="flex-1">
              <div class="font-semibold mb-3">Company</div>
              <ul class="flex flex-col gap-2">
                <li><NuxtLink to="" class="text-sm">About Us</NuxtLink></li>
                <li><NuxtLink to="" class="text-sm">Delivery Information</NuxtLink></li>
                <li><NuxtLink to="" class="text-sm">Privacy Policy</NuxtLink></li>
                <li><NuxtLink to="" class="text-sm">Terms & Conditions</NuxtLink></li>
                <li><NuxtLink to="" class="text-sm">Contact Us</NuxtLink></li>
                <li><NuxtLink to="" class="text-sm">Support Center</NuxtLink></li>
                <li><NuxtLink to="" class="text-sm">Careers</NuxtLink></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-5 w-[240px] flex-shrink-0">
          <div class="font-semibold mb-3">Install App</div>
          <span class="text-sm">From App Store or Google Play</span>
          <div class="flex gap-2">
            <div  class="flex-1"><img src="/images/ggplay.jpg" alt="Logo"></div>
            <div  class="flex-1"><img src="/images/appstore.jpg" alt="Logo"></div>
          </div>
          <span>Secured Payment Gateways</span>
          <img src="/images/payment.jpg" alt="Logo" class="w-2/3">
        </div>
      </div>
    </LayoutContainer>
    <div class="border-t broder-gray-50 bg-white py-2">
      <Container>
      <div class="flex items-center gap-6">
        <div class="text-sm">
          <div>© 2022, Nest – WordPress Ecommerce Template</div>
          <div>All rights reserved</div>
        </div>
        <div class="flex-1 flex items-center gap-3">
          <div class="flex items-center gap-2">
            <Icon name="lucide:headset" class="size-9"></Icon>
            <div>
              <div class="text-mint-3bb77e text-[26px] leading-7 font-bold">1900888123</div>
              <div class="text-gray-300 text-xs">24/7 Support Center</div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="lucide:headset" class="size-9"></Icon>
            <div>
              <div class="text-mint-3bb77e text-[26px] leading-7 font-bold">1900888123</div>
              <div class="text-gray-300 text-xs">24/7 Support Center</div>
            </div>
          </div>
        </div>
        <div class="text-right text-sm">
          <div class="flex items-center gap-1 w-max ml-auto">
            <span class="mr-2">Follow Us</span>
            <div class="size-8 rounded-full overflow-hidden flex items-center justify-center bg-mint-3bb77e">
              <img
                  src="/images/icons/facebook.svg"
                  alt="Logo"
              >
            </div>
            <div class="size-8 rounded-full overflow-hidden flex items-center justify-center bg-mint-3bb77e">
              <img
                  src="/images/icons/twitter.svg"
                  alt="Logo"
              >
            </div>
            <div class="size-8 rounded-full overflow-hidden flex items-center justify-center bg-mint-3bb77e">
              <img
                  src="/images/icons/sky.svg"
                  alt="Logo"
              >
            </div>
            <div class="size-8 rounded-full overflow-hidden flex items-center justify-center bg-mint-3bb77e">
              <img
                  src="/images/icons/intsagram.svg"
                  alt="Logo"
              >
            </div>
          </div>
          <span>Up to 15% discount on your first subscribe</span>
        </div>
      </div>
    </Container>
    </div>
  </footer>
</template>
