<template>
  <div class="min-h-screen bg-gray-100">
    <div class="container mx-auto p-6">
      <h2 class="text-3xl font-bold text-gray-800">Edit Item</h2>
      <form @submit.prevent="editItem">
        <div class="mt-4">
          <label class="block text-gray-700">Title</label>
          <input type="text" v-model="title" class="w-full p-2 border border-gray-300 rounded-lg mt-1" required />
        </div>
        <div class="mt-4">
          <label class="block text-gray-700">Description</label>
          <textarea v-model="description" class="w-full p-2 border border-gray-300 rounded-lg mt-1" required></textarea>
        </div>
        <div class="mt-4">
          <label class="block text-gray-700">Date</label>
          <input type="date" v-model="date" class="w-full p-2 border border-gray-300 rounded-lg mt-1" required />
        </div>
        <div class="mt-6 text-center">
          <button type="submit" :disabled="loading" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full">
            {{ loading ? 'Saving...' : 'Save' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('');
const description = ref('');
const date = ref('');
const loading = ref(false);

const editItem = async () => {
  loading.value = true;
  try {
    console.log('Edit item clicked', { title: title.value, description: description.value, date: date.value });
    // Implement API call for editing item
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
  } catch (error) {
    console.error('Editing item failed', error);
  } finally {
    loading.value = false;
  }
};
</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
}
</style>
