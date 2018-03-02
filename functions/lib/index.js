"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Imports */
const Functions = require("firebase-functions");
const Admin = require("firebase-admin");
const axios_1 = require("axios");
/** Initialisation **/
Admin.initializeApp(Functions.config().firebase);
const AxiosInstance = axios_1.default.create();
/** Functions */
exports.fetchImagesForTag = Functions.https.onRequest((req, res) => {
    const tag = req.body.tag;
    AxiosInstance.get(`https://api.flickr.com/services/feeds/photos_public.gne?format=json&tag=${tag}&nojsoncallback=1`)
        .then(response => res.append('Access-Control-Allow-Origin', '*').send(response.data))
        .catch(error => console.log('error', error));
});
//# sourceMappingURL=index.js.map