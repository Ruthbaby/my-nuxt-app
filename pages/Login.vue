<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Navbar -->
    <!-- <nav class="bg-[#008289] p-4 text-white flex justify-between items-center">
      <h1 class="text-lg font-semibold">Eventful Moments.</h1>
      <div>
        <NuxtLink to="/login" class="mr-4 hover:underline">Login</NuxtLink>
        <NuxtLink to="/register" class="hover:underline">Register</NuxtLink>
      </div>
    </nav> -->

    <!-- Registration Section -->
    <div
      class="container mx-auto p-6 flex justify-center items-center min-h-[80vh]"
    >
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-bold text-gray-800 text-center">
          Create an account,
        </h2>
        <form @submit.prevent="register">
          <div class="mt-4">
            <label class="block text-gray-700">Fullname</label>
            <input
              type="text"
              v-model="fullname"
              class="w-full p-2 border border-gray-300 rounded-lg mt-1"
              required
            />
          </div>
          <div class="mt-4">
            <label class="block text-gray-700">Email</label>
            <input
              type="email"
              v-model="email"
              class="w-full p-2 border border-gray-300 rounded-lg mt-1"
              required
            />
          </div>
          <div class="mt-4">
            <label class="block text-gray-700">Password</label>
            <input
              type="password"
              v-model="password"
              class="w-full p-2 border border-gray-300 rounded-lg mt-1"
              required
            />
          </div>
          <div class="mt-6 text-center">
            <button
              type="submit"
              :disabled="loading"
              class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full"
            >
              {{ loading ? 'Saving...' : 'Create' }}
            </button>
          </div>
        </form>
      </div>
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
    console.log('Register clicked', {
      fullname: fullname.value,
      email: email.value,
      password: password.value,
    });
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
<style src="~/assets/css/tailwind.css"></style>
<style src="~/assets/css/main.css"></style>
