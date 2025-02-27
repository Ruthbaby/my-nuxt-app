// server/api/moments.js
import fetch from 'node-fetch';

export default defineEventHandler(async () => {
  const response = await fetch('https://eventful-moments-api.onrender.com/api/v1/users/login'); // placed the  endpoint
  const data = await response.json();
  return data;
});