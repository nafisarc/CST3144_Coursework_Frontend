const API_URL = "https://cst3144-coursework-0xsh.onrender.com/collection/lessons";

// Fetch all lessons from the backend.

function fetchLessons() {
  return fetch(API_URL)
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
