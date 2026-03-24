// Select the dropdown
const breedSelect = document.getElementById('breed-select');

// Fetch dog breeds when the page loads
fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => {
    const breeds = data.message;

    // Loop through each breed
    for (let breed in breeds) {
      const option = document.createElement('option');
      option.value = breed;
      option.textContent = breed;

      breedSelect.appendChild(option);
    }
  })
  .catch(error => {
    console.error('Error fetching breeds:', error);
  });