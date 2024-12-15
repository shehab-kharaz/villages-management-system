function createFigureElement(file) {
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  const figcaption = document.createElement('figcaption');

  img.src = URL.createObjectURL(file);
  img.alt = "image alternative"; 
  figcaption.textContent = "figure caption";

  figure.appendChild(img);
  figure.appendChild(figcaption);

  return figure;
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const figure = createFigureElement(file);
    appendImageToGallery(figure);
  }
}

function appendImageToGallery(figure) {
  const galleryContainer = document.querySelector('.gallery-container');
  galleryContainer.appendChild(figure);
}

function initImageUploader() {
  const addImageButton = document.getElementById('add-image-btn');
  const imageUploadInput = document.getElementById('image-upload');

  addImageButton.addEventListener('click', () => {
    imageUploadInput.click();
  });

  imageUploadInput.addEventListener('change', handleImageUpload);
}

initImageUploader();