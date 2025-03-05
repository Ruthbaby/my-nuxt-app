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
    <h1 class="text-l font-bold mx-8 px-4 py-2">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1scentury BC text De Finibus Bonorum et Malorum.</h1>
    
  <p class="text-sm mt-3 px-4 py-2 mx-8">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
    </p>
    <p class="mt-3 px-4 py-2 mx-8">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
    </p>
    <p class="mt-3 px-4 py-2 mx-8">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.</p>

      <button class="bg-teal-400 ml-14 text-white px-4 py-2 my-6 rounded w-1/6">Edit</button>
       <button class="bg-[#C34F06] text-white px-4 py-2 rounded my-6 mx-8 w-1/6">Delete</button>
       
      <!-- <p v-if="error" class="">{{ error }}</p>
      <input v-model="name" type="text" placeholder="Item Name" class="block w-full p-2 border rounded mb-2" /> -->
  </div>
</template>






<!-- <template>
  <div class='min-h-screen bg-gray-100 p-6'>
    <div class='max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6'>
      <template v-if='loading'>
        <p class='text-gray-700'>Loading event details...</p>
      </template>
      <template v-else-if='error'>
        <p class='text-red-500'>{{ error }}</p>
      </template>
      <template v-else>
        <h1 class='text-2xl font-bold text-gray-800'>{{ event.title }}</h1>
        <p class='text-sm text-gray-500 mb-4'>{{ event.date }} </p>
        <p class='text-gray-700 mb-6'>{{ event.description }}</p>
        <div class='flex space-x-4'>
          <button @click='editEvent' class='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>Edit</button>
          <button @click='deleteEvent' class='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>Delete</button>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const event = ref({ title: '', date: '', description: '' });
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get('https://api.example.com/event', {
      headers: { Authorization: 'https://api.getpostman.com/apis/5360b75f-447e-467c-9299-12fd6c92450d/comments' },
    });
    event.value = response.data;
  } catch (err) {
    error.value = 'Failed to load event data. Please try again later.';
    console.error('Error fetching event data:', err);
  } finally {
    loading.value = false;
  }
});

const editEvent = () => {
  console.log('Edit event clicked');
};

const deleteEvent = async () => {
  if (!confirm('Are you sure you want to delete this event?')) return;
  try {
    await axios.delete('https://api.example.com/event', {
      headers: { Authorization: 'https://api.getpostman.com/apis/5360b75f-447e-467c-9299-12fd6c92450d/comments' },
    });
    alert('Event deleted successfully!');
    console.log('Event deleted successfully');
  } catch (err) {
    alert('Failed to delete event. Please try again.');
    console.error('Error deleting event:', err);
  }
};
</script> -->
