// nuxt.config.ts
export default defineNuxtConfig({
    ssr: true, // hoặc false nếu muốn SPA
    srcDir: 'src/', // nếu bạn muốn giữ src/ làm root
    modules: ['@nuxt/icon', '@nuxt/image', '@nuxtjs/tailwindcss'],
    tailwindcss: {
        configPath: '@/tailwind.config.js',
    },
    icon: {},
    runtimeConfig: {
        public: {
            API_BASE: process.env.VITE_API_BASE_URL || ''
        }
    },
})