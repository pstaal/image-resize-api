import sharp from 'sharp';



const resizeImage = async (inputfile: string, outputfile: string, width: number, height: number): Promise<string> => {
console.log(inputfile);
console.log(outputfile);
try {
await sharp(inputfile)
.resize(width, height)
.toFile(outputfile).then(info => { console.log(info) })
.catch((error) => console.log(error.message))
} catch(error) {
  alert(error.message)
}

return outputfile;

};

export default resizeImage;