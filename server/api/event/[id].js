

// server/api/events/[id].js
import fetch from 'node-fetch';

// Fetch event data (GET request)
export default defineEventHandler(async (event) => {
  const id = event.context.params.id; // Get the event ID from the route parameter
  const apiUrl = `https://eventful-moments-api.onrender.com/api/v1/moment/614556facd07331621f6bb0a/item/${id}`; // Replace with your actual API endpoint

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch event data. Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching event data:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch event data. Please try again later.',
    });
  }
});