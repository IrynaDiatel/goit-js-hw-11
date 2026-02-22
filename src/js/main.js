/* ПІДКЛЮЧАЄМО СТИЛІ (обов’язково для Vite) */
import './css/styles.css';

/* iziToast */
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

/* API та рендер */
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

/* елементи сторінки */
const formEl = document.querySelector('.form');

/* обробник форми */
function handleSearchSubmit(event) {
  event.preventDefault();

  const input = formEl.querySelector('input[name="search-text"]');
  const query = input.value.trim();

  /* якщо порожній запит */
  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  /* показати loader і очистити галерею */
  showLoader();
  clearGallery();

  /* запит */
  getImagesByQuery(query)
    .then(data => {
      hideLoader();

      if (!data || !data.hits || data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 4000,
        });
        return;
      }

      /* малюємо картинки */
      createGallery(data.hits);
    })
    .catch(error => {
      hideLoader();

      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please reload the page.',
        position: 'topRight',
        timeout: 5000,
      });

      console.error(error);
    });
}

/* підключення submit */
if (formEl) {
  formEl.addEventListener('submit', handleSearchSubmit);
}