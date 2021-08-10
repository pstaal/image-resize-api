import express from 'express';
import resizeImage from '../../utilities/resize-image';
const imageApi = express.Router();

imageApi.get('/', (req, res) => {

  let filename: string = req.query.filename;
  let width: number = req.query.width;
  let height: number = req.query.height;

  res.sendFile(resizeImage(filename, width, height));

});

export default imageApi;