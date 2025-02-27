<!-- // pages/edit-item.vue -->
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const name = ref('');
const description = ref('');
const error = ref('');

onMounted(async () => {
  const response = await fetch(`https://api.postman.com/buckets/${route.params.id}`);
  const data = await response.json();
  name.value = data.name;
  description.value = data.description;
});

const updateItem = async () => {
  if (!name.value || !description.value) {
    error.value = "All fields are required";
    return;
  }
  error.value = "";
  await fetch(`https://api.postman.com/buckets/${route.params.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name.value, description: description.value })
  });
};
</script>

<template>
  <div class="p-4">
    <h1 class="text-xl font-bold">Edit Item</h1>
    <form @submit.prevent="updateItem" class="mt-4">
      <p v-if="error" class="text-red-500">{{ error }}</p>
      <input v-model="name" type="text" class="block w-full p-2 border rounded mb-2" />
      <textarea v-model="description" class="block w-full p-2 border rounded mb-4"></textarea>
      <button class="bg-yellow-500 text-white px-4 py-2 rounded w-full">Update</button>
    </form>
  </div>
</template>

<!-- 'https://eventful-moments-api.onrender.com/api/v1/moment/61455755cd07331621f6bb0d' 
--data '{
    "title":""
    "details":"",
    "futureDate":"""
}' -->

<!-- <script setup>
const route = useRoute();
const itemId = route.params.id;
</script> -->