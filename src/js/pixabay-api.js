// Підключення Axios для HTTP-запитів
import axios from 'axios';

// Базовий URL Pixabay API
const BASE_URL = 'https://pixabay.com/api/';

// Отримання API-ключа з змінних середовища (.env)
function getApiKey() {
  return import.meta.env.VITE_PIXABAY_API_KEY || '';
}

// Виконання HTTP-запиту за пошуковим словом; повертає data з відповіді
export function getImagesByQuery(query) {
  const key = getApiKey();

  // Перевірка наявності ключа — якщо відсутній, відхиляємо Promise
  if (!key || !String(key).trim()) {
    return Promise.reject(new Error('MISSING_API_KEY'));
  }

  // Параметри запиту згідно з ТЗ (key, q, image_type, orientation, safesearch)
  const params = {
    key: key.trim(),
    q: String(query).trim(),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  return axios.get(BASE_URL, { params }).then((response) => response.data);
}