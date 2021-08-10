import express from 'express';
import resizeImage from '../../utilities/resize-image';
const imageApi = express.Router();

imageApi.get('/', (req, res) => {

  let filename = req.query.filename;
  let width = req.query.width;
  let height = req.query.height;

  res.sendFile(resizeImage(filename: string, width: number, height:number): string);

});

export default imageApi;