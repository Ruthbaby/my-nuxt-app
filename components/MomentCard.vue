<template>
  <div class="bg-white p-4 rounded shadow-md">
    <h3 class="text-xl font-semibold">{{ moment.title }}</h3>
    <p class="text-gray-600">{{ moment.description }}</p>
    <p class="text-sm text-gray-500">Date: {{ moment.date }}</p>
    <NuxtLink :to="`/item/${moment.id}`" class="text-blue-500 hover:underline">View Details</NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  moment: {
    type: Object,
    required: true,
  },
});
</script>