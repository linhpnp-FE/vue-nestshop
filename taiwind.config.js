/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './**/*.{vue,js,ts,jsx,tsx,html}'
    ],
    theme: {
        extend: {
            colors: {
                mint: {
                    DEFAULT: '#3BB77E',
                    50: '#E8F8EF',
                    100: '#CFF2DE',
                    500: '#3BB77E'
                },
                gray: {
                    DEFAULT: '#253D4E',
                    50: '#F4F6FA',
                    100: '#F2F3F4'
                }
            },
            fontFamily: { quicksand: ['Quicksand','sans-serif'] }
        }
    },
    plugins: [],
}