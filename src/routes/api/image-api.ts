import express from 'express';
const imageApi = express.Router();

imageApi.get('/', (req, res) => {
  res.send('Resizing the image');



});

export default imageApi;