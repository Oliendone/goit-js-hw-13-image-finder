import imageCard from '../templates/imageCard.hbs';
import refs from './refs';

const apiKey = '17699142-647d86f7481db9fd81baa015f';

export default function fetchImages(searchQuery, page) {
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;

  const options = {
    headers: {
      Authorization: apiKey,
    },
  };

  return fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error));
}
