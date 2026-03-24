/// Fetch and display images when a breed is selected
breedSelect.addEventListener('change', function () {
  const selectedBreed = breedSelect.value;

  if (!selectedBreed) return;

  // Clear previous images
  gallery.innerHTML = 'Loading images...';

  fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/9`)
    .then(response => response.json())
    .then(data => {
      const imageUrls = data.message;

      // Clear loading text
      gallery.innerHTML = '';

      // Loop through images
      imageUrls.forEach(url => {
        const div = document.createElement('div');
        div.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = url;
        img.alt = selectedBreed;

        div.appendChild(img);
        gallery.appendChild(div);
      });
    })
    .catch(error => {
      gallery.innerHTML = 'Failed to load images.';
      console.error('Error fetching images:', error);
    });
});