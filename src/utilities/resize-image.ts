import sharp from 'sharp';



const resizeImage = async (inputfile: string, outputfile: string, width: number, height: number): string => {

try {
await sharp(inputfile)
.resize(width, height)
.toFile(outputfile).then(info => { console.log(info) })
.catch((error) => console.log(error.message))
} catch(error) {
  console.log(error.message)
}

return outputfile;

};

export default resizeImage;