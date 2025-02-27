<template>
  <div>
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
}
</style>

<style src="~/assets/css/tailwind.css"></style>
<style src="~/assets/css/main.css"></style>
