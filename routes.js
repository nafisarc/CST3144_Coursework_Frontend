// Base URL for Render API
const API_BASE = "https://cst3144-coursework-0xsh.onrender.com/collection";

// Specific endpoint for lessons
const LESSONS_URL = `${API_BASE}/lessons`;

// GET /collection/lessons
function fetchLessons() {
  return fetch(LESSONS_URL)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.status);
      }
      return response.json();
    })
    .catch(function (error) {
      console.error("Error fetching lessons from API:", error);
      throw error;
    });
}

// * POST /collection/orders
function saveOrder(orderData) {
  return fetch(`${API_BASE}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(orderData)
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Failed to save order: " + response.status);
      }
      return response.json(); // the document we sent + _id from Mongo
    })
    .catch(function (error) {
      console.error("Error saving order to API:", error);
      throw error;
    });
}
