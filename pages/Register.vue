<template>
  <div class="min-h-screen bg-gray-100">
    <div class="container mx-20 p-6">
      <!-- <h2 class="text-3xl font-bold text-gray-800">Register</h2> -->
      <form @submit.prevent="save">
        <div class="mt-4">
          <p>Date in the future</p>
          <label class="block text-gray-700 w-1/4" ></label>
          <input type="date" v-model="Date" class="w-1/4 p-2 border border-gray-400 rounded-lg mt-1 h-9" required />
        </div>
        <div class="mt-4">
          <label class="block text-gray-700 w-1/4">Title</label>
          <input type="title" v-model="title" class="w-1/4 p-2 border border-gray-400 rounded-lg mt-1 h-9" required />
        </div>
        <div class="mt-4">
          <label class="block text-gray-700 w-1/4">Details</label>
          <textarea type="text" v-model="text" name="text" id="text" cols="36" rows="8" class="border border-gray-400" required></textarea>
          <!-- <input type="password" v-model="password" class="w-full p-2 border border-gray-300 rounded-lg mt-1" required /> -->
        </div>
        <div class="mt-6 text-left">
          <button type="save" :disabled="loading" class="mx-12 bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 w-1/6">
            {{ loading ? 'Saving...' : 'Save' }}
            
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';

const date = ref('');
const title = ref('');
const textarea = ref('');
const loading = ref(false);

const save = async () => {
  loading.value = true;
  try {
    console.log('save clicked', { date: date.value, title: title.value, textarea: textarea.value });
    // Implement API call for Updating/Save
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
  } catch (error) {
    console.error('save failed', error);
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
