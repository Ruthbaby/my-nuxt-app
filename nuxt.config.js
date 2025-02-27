// filepath: /c:/Users/user/My-Nuxt-App/nuxt.config.js
export default {
  // Enable components auto-import
  components: true,

  // Global CSS files
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/main.css',
  ],

  // Build modules
  buildModules: [
    '@nuxtjs/tailwindcss', // Add Tailwind CSS module
  ],

  // Plugins to run before rendering page
  plugins: [
    '~/plugins/index.js', // Ensure the plugin is included
  ],

  // Hooks
  hooks: {
    'vue-renderer:ssr:context'(context) {
      context.payload = {
        ...context.payload,
        // Ensure no functions or non-serializable values are added
        customData: 'example', // Add only serializable data
      };
    },
  },

  compatibilityDate: '2025-02-27',
};