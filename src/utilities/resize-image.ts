import sharp from 'sharp';
import {promises as fsPromises} from fs;
import path from 'path';
import fs from 'fs';



const resizeImage = (filename: string, width: string, height: string): void => {

let inputFile;
try {
inputFile = path.resolve(filename);
} 
catch(error) {
  console.log(error.message);
}

//remove jpg extension
let fileString = filename.slice(0, -4);
// create path for output file
const outputFile = path.resolve("images/thumb", `${width}-${height}-${fileString}.jpg`);


sharp(inputFile)
.resize(width, height)
.toFile(outputFile).then(info => { console.log(info) })
.catch((error) => console.log(error.message))


};

export default resizeImage;