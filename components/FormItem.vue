<template>
  <form @submit.prevent="submitForm" class="p-4 bg-white rounded shadow-md">
    <div class="mb-4">
      <label for="title" class="block text-sm font-medium text-gray-700">Title:</label>
      <input type="text" id="title" v-model="formData.title" class="mt-1 p-2 w-full border rounded-md" required>
    </div>
    <div class="mb-4">
      <label for="description" class="block text-sm font-medium text-gray-700">Description:</label>
      <textarea id="description" rows="4" v-model="formData.description" class="mt-1 p-2 w-full border rounded-md" required></textarea>
    </div>
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue';

const props = defineProps({
  initialData: {
    type: Object,
    default: () => ({ title: '', description: '' }),
  },
});

const emit = defineEmits(['submit']);

const formData = reactive({ ...props.initialData });

const submitForm = () => {
  emit('submit', formData);
};
</script>