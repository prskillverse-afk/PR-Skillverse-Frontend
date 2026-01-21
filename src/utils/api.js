// src/utils/api.js

const API_URL = import.meta.env.VITE_API_URL;

async function post(endpoint, data) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
}

const api = {
  post,
};

export default api;
