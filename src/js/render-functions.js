import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader-wrap');

let lightboxInstance = null;

function createCardMarkup(img) {
  const {
    webformatURL,
    largeImageURL,
    tags = '',
    likes = 0,
    views = 0,
    comments = 0,
    downloads = 0,
  } = img;
  const alt = String(tags).slice(0, 200);

  return `
<li class="gallery-item">
  <a class="gallery-item__link" href="${largeImageURL}" title="${alt}">
    <img
      class="gallery-item__img"
      src="${webformatURL}"
      alt="${alt}"
      loading="lazy"
      width="640"
      height="360"
    />
    <div class="gallery-item__info">
      <span class="gallery-item__info-item">❤️ ${likes}</span>
      <span class="gallery-item__info-item">👁 ${views}</span>
      <span class="gallery-item__info-item">💬 ${comments}</span>
      <span class="gallery-item__info-item">⬇ ${downloads}</span>
    </div>
  </a>
</li>`;
}

export function createGallery(images) {
  if (!galleryEl) return;
  if (!Array.isArray(images) || images.length === 0) {
    galleryEl.innerHTML = '';
    lightboxInstance?.refresh();
    return;
  }

  const markup = images.map(createCardMarkup).join('');
  galleryEl.innerHTML = markup;

  if (!lightboxInstance) {
    lightboxInstance = new SimpleLightbox('.gallery a', {
      captionsData: 'title',
      captionDelay: 250,
    });
  } else {
    lightboxInstance.refresh();
  }
}

export function clearGallery() {
  if (galleryEl) galleryEl.innerHTML = '';
}

export function showLoader() {
  if (loaderEl) loaderEl.classList.remove('is-hidden');
}

export function hideLoader() {
  if (loaderEl) loaderEl.classList.add('is-hidden');
}