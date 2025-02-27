<template>
  <div class="min-h-screen bg-gray-100">
    <div class="container mx-auto p-6">
      <h2 class="text-3xl font-bold text-gray-800">{{ item.title }}</h2>
      <p class="text-gray-600 text-sm">{{ item.description }}</p>
      <p class="text-gray-500 text-xs mt-2">{{ item.date }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const item = ref({});

const fetchItem = async () => {
  try {
    const response = await axios.get('https://api.yourpostmanapi.com/item/1'); // Replace with dynamic ID
    console.log('API response:', response.data); // Log the API response
    item.value = response.data;
    console.log('Item:', item.value); // Log the item
  } catch (error) {
    console.error('Error fetching item:', error);
  }
};

onMounted(fetchItem);
</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
}
</style>
