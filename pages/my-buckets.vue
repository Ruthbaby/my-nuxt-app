<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Welcome Section -->
    <div class="container mx-auto p-6">
      <h2 class="text-3xl font-bold text-gray-800">Welcome John Doe,</h2>
      <p class="text-gray-600 text-xs">We are here to help you record all memorable events.</p>

      <!-- Add Item Button -->
      <div class="my-4 text-right">
        <button @click="addItem" class="bg-blue-600 text-white px-4 py-2 rounded-lg">Add Item</button>
      </div>

      <!-- Event Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(item, index) in displayedEvents" :key="index" class="bg-white p-4 rounded-lg shadow-lg border border-gray-300 hover:bg-yellow-200 hover:text-white">
          <h3 class="text-lg font-semibold">{{ item.title }}</h3>
          <p class="text-gray-600 text-sm">{{ item.description }}</p>
          <p class="text-gray-500 text-xs mt-2">{{ item.date }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
        <div class="bg-white p-4 rounded-lg shadow-lg border border-gray-300 hover:bg-yellow-200 hover:text-black">
          <h3 class="text-sm font-semibold mb-3">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.</h3>
          <p class="[text-000] text-sm">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.</p>
          <p class="text-gray-500 text-xs mt-2">Date: 2023-07-15</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-lg border border-gray-300 hover:bg-yellow-200 hover:text-black">
          <h3 class="text-sm font-semibold mb-3">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum</h3>
          <p class="[text-000] text-sm">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.</p>
          <p class="text-gray-500 text-xs mt-2 text-right">Date: 2022-06-10</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-lg border border-gray-300 hover:bg-yellow-200 hover:text-black">
          <h3 class="text-sm font-semibold mb-3">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum</h3>
          <p class="text-black text-sm">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.</p>
          <p class="text-gray-500 text-xs mt-2 text-right">Date: 2024-04-20</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-lg border border-gray-300 hover:bg-yellow-200 [hover:text-000]">
          <h3 class="text-sm font-semibold mb-3">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum</h3>
          <p class="[text-000] text-sm">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.</p>
          <p class="text-gray-500 text-xs mt-2 text-right">Date: 2024-04-20</p>
        </div>
        <!-- <div class="bg-white p-4 rounded-lg shadow-lg border border-gray-300 hover:bg-yellow-200 hover:text-black">
          <h3 class="text-sm font-semibold mb-3">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum</h3>
          <p class="[text-000] text-sm">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.</p>
          <p class="text-gray-500 text-xs mt-2 text-right">Date: 2024-04-20</p>
        </div> -->
      </div>
    </div>

    <!-- More Button -->
    <div class="flex justify-center my-4">
      <button @click="loadMore" class="bg-blue-600 text-white px-4 py-2 rounded-lg">More</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

const events = ref([]);
const itemsToShow = ref(8); // Initially show 8 items (2 rows of 4 items each)

const fetchEvents = async () => {
  try {
    const response = await axios.get('https://eventful-moments-api.onrender.com/api/v1/moment');
    console.log('API response:', response.data); // Log the API response
    events.value = response.data;
    console.log('Events:', events.value); // Log the events array
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};

const displayedEvents = computed(() => {
  return events.value.slice(0, itemsToShow.value);
});

const addItem = () => {
  console.log('Add item clicked');
  // Implement add item functionality
};

const loadMore = () => {
  itemsToShow.value += 4; // Show 4 more items when "More" button is clicked
  console.log('Load more clicked');
};

onMounted(fetchEvents);
</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
}
</style>
