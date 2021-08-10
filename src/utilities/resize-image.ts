import sharp from 'sharp';
import path from 'path';
import fs from 'fs';



const resizeImage = (filename: string, width: number, height: number): string => {

let inputFile;
try {
inputFile = path.resolve('images/full', `${filename}.jpg`);
} 
catch(error) {
  console.log(error.message);
}


// create path for output file
const outputFile = path.resolve("images/thumb", `${width}-${height}-${filename}.jpg`);

if (fs.existsSync(outputFile)) {
  return outputFile;
}
else {
sharp(inputFile)
.resize(width, height)
.toFile(outputFile).then(info => { console.log(info) })
.catch((error) => console.log(error.message))
};

return outputFile;

};

export default resizeImage;