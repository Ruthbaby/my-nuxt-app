// pages/add-item.vue
<script setup>
import { ref } from 'vue';
const name = ref('');
const description = ref('');
const error = ref('');

const addItem = async () => {
  if (!name.value || !description.value) {
    error.value = "All fields are required";
    return;
  }
  error.value = "";
  await fetch('https://api.postman.com/buckets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name.value, description: description.value })
  });
};
</script>

<template>
  <div class="p-4">
    <h1 class="text-xl font-bold">Add Item</h1>
    <form @submit.prevent="addItem" class="mt-4">
      <p v-if="error" class="text-red-500">{{ error }}</p>
      <input v-model="name" type="text" placeholder="Item Name" class="block w-full p-2 border rounded mb-2" />
      <textarea v-model="description" placeholder="Description" class="block w-full p-2 border rounded mb-4"></textarea>
      <button class="bg-green-500 text-white px-4 py-2 rounded w-full">Add</button>
    </form>
  </div>
</template>
