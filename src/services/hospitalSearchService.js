import axios from "axios";

/**
 * Fetches the list of states from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of states.
 */
export const fetchStates = async () => {
  try {
    const response = await axios.get("https://meddata-backend.onrender.com/states");
    return response.data;
  } catch (error) {
    console.error("Error fetching states:", error);
    throw error;
  }
};

/**
 * Fetches the list of cities for a given state from the API.
 * @param {string} state - The state for which to fetch cities.
 * @returns {Promise<Array>} A promise that resolves to an array of cities.
 */
export const fetchCities = async (state) => {
  try {
    const response = await axios.get(`https://meddata-backend.onrender.com/cities/${state}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cities:", error);
    throw error;
  }
};