/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    // "./error.vue", 
  ],
  safelist: ["bg-red-500", "text-blue-500"],
  theme: {
    extend: {
      colors: {
        customBlue: '#60CED4',
      },
    },
  },
  plugins: [],
};
