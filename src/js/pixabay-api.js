import axios from 'axios';

export function getImagesByQuery(query) {
const API_KEY = '47477357-395d8a047c7c5012d361fddb9';
  const url = 'https://pixabay.com/api/';

  return axios
    .get(url, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      return response.data;
    });
}