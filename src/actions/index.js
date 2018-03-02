/** Imports */
import Axios from 'axios';

export const fetchImages = (tag = 'apple', callback) => {
  Axios.get(`https://us-central1-flickr-search-7956c.cloudfunctions.net/fetchImagesForTag?tag=${tag}`).then(response => callback(response.data.items))
}