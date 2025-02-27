<template>
  <div class="min-h-screen bg-gray-100">
    <div class="container mx-auto p-6">
      <h2 class="text-3xl font-bold text-gray-800">Register</h2>
      <form @submit.prevent="register">
        <div class="mt-4">
          <label class="block text-gray-700">Fullname</label>
          <input type="text" v-model="fullname" class="w-full p-2 border border-gray-300 rounded-lg mt-1" required />
        </div>
        <div class="mt-4">
          <label class="block text-gray-700">Email</label>
          <input type="email" v-model="email" class="w-full p-2 border border-gray-300 rounded-lg mt-1" required />
        </div>
        <div class="mt-4">
          <label class="block text-gray-700">Password</label>
          <input type="password" v-model="password" class="w-full p-2 border border-gray-300 rounded-lg mt-1" required />
        </div>
        <div class="mt-6 text-center">
          <button type="submit" :disabled="loading" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full">
            {{ loading ? 'Registering...' : 'Register' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const fullname = ref('');
const email = ref('');
const password = ref('');
const loading = ref(false);

const register = async () => {
  loading.value = true;
  try {
    console.log('Register clicked', { fullname: fullname.value, email: email.value, password: password.value });
    // Implement API call for registration
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
  } catch (error) {
    console.error('Registration failed', error);
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
