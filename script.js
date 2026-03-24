// Select elements
const breedSelect = document.getElementById('breed-select');
const gallery = document.getElementById('gallery');

// Fetch dog breeds when the page loads
fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => {
    const breeds = data.message;

    for (let breed in breeds) {
      if (breeds[breed].length === 0) {
        const option = document.createElement('option');
        option.value = breed;
        option.textContent = breed;
        breedSelect.appendChild(option);
      } else {
        breeds[breed].forEach(subBreed => {
          const option = document.createElement('option');
          option.value = `${breed}/${subBreed}`;
          option.textContent = `${subBreed} ${breed}`;
          breedSelect.appendChild(option);
        });
      }
    }
  })
  .catch(error => {
    console.error('Error fetching breeds:', error);
  });

// Fetch and display image when a breed is selected
breedSelect.addEventListener('change', function () {
  const selectedBreed = breedSelect.value;

  if (!selectedBreed) return;

  // Clear previous images
  gallery.innerHTML = '';

  fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
    .then(response => response.json())
    .then(data => {
      const imageUrl = data.message;

      // Create image container
      const div = document.createElement('div');
      div.classList.add('gallery-item');

      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = selectedBreed;

      div.appendChild(img);
      gallery.appendChild(div);
    })
    .catch(error => {
      console.error('Error fetching image:', error);
    });
});