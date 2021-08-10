import express from 'express';
const imageApi = express.Router();

imageApi.get('/', (req, res) => {
  res.send('Resizing the image');
  try {
    sharp(inputFile)
      .resize(125, 125)
      .toFile(outputFile).then(info => { console.log(info) })
      .catch((error) => console.log(error.message))
  } catch (error) {
    console.log(error.message);
  }

});

export default imageApi;