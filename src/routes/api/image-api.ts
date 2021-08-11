import { Router, Request, Response } from "express";
import resizeImage from '../../utilities/resize-image';
import path from 'path';
import fs from 'fs';
const imageApi : Router= Router();


imageApi.get('/', async (req: Request, res: Response) => {

  let filename= req.query.filename as string;
  let width = parseInt(req.query.width as string);
  let height = parseInt(req.query.height as string);
  if( !filename || !width || !height) {
    return res.status(404).send("Please provide a filename, a width and a height in the url");
  }

  // create path for input file
  let inputFile = path.resolve("images/full", `${filename}.jpg`);
  if (!fs.existsSync(inputFile)){
    return res.status(404).send("File not found - check the name and try again");
  }
  
  // create path for output file
  let outputFile = path.resolve("images/thumb", `${width}-${height}-${filename}.jpg`);

  // check if the file already exists
  if (fs.existsSync(outputFile)) {
    res.sendFile(outputFile);
  } else {
    outputFile = await resizeImage(inputFile, outputFile, width, height);
    res.sendFile(outputFile);
  }

});

export default imageApi;