/** Imports */
import * as Functions from 'firebase-functions';
import * as Admin from 'firebase-admin';
import Axios from 'axios'

/** Initialisation **/
Admin.initializeApp(Functions.config().firebase);

const AxiosInstance = Axios.create();

/** Functions */
export const fetchImagesForTag = Functions.https.onRequest((req, res) => {
  const tag = req.body.tag;

  AxiosInstance.get(`https://api.flickr.com/services/feeds/photos_public.gne?format=json&tag=${tag}&nojsoncallback=1`)
    .then(response => res.append('Access-Control-Allow-Origin', '*').send(response.data))
    .catch(error => console.log('error', error))
})