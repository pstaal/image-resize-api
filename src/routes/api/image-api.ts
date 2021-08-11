import express from 'express';
import resizeImage from '../../utilities/resize-image';
import path from 'path';
import fs from 'fs';
const imageApi = express.Router();


imageApi.get('/', async (req, res) => {

  let filename: string = req.query.filename;
  let width: number = parseInt(req.query.width);
  let height: number = parseInt(req.query.height);

  // create path for input file
  let inputFile = path.resolve(__dirname, `images/full/${filename}.jpg`);
  
  // create path for output file
  let outputFile = path.resolve(__dirname, `images/thumb/${width}-${height}-${filename}.jpg`);

  // check if the file already exists
  if (fs.existsSync(outputFile)) {
    res.sendFile(outputFile);
  } else {
    outputFile = await resizeImage(inputFile, outputFile, width, height);
    res.sendFile(outputFile);
  }

});

export default imageApi;