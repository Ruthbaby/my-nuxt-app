<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-screen max-w-screen-2xl mx-auto"
  >
    <div class="w-full max-w-xl bg-white p-8 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold text-gray-800 text-left mb-6">Welcome back,</h2>
      <p class="text-sm text-gray-600 text-left mb-6">
        Hi, my name is Eventful Moments. I am a bucket... no, not the bucket of
        water but I store awesome moments you will like to have in coming years.
      </p>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            v-model="email"
            type="email"
            id="email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            v-model="password"
            type="password"
            id="password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div class="flex justify-center">
          <button
            type="submit"
            class="w-2/5 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const email = ref('');
const password = ref('');

const login = async () => {
  try {
    const response = await axios.post('https://api.yourpostmanapi.com/login', {
      email: email.value,
      password: password.value,
    });
    console.log('Login successful:', response.data);
    // Handle success (e.g., redirect to dashboard, store token, etc.)
  } catch (error) {
    console.error('Login failed:', error.response?.data || error.message);
  }
};
</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
}
</style>
