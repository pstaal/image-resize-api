import express from 'express';
import sharp from 'sharp';

const app = express();
const port = 3000;
const inputFile = '../images/full/fjord.jpg';
const outputFile = '../images/resized/outputfile.jpg';

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});


app.get('/image', (req, res) => {
  res.send('Resizing the image');
  try {
    sharp(inputFile)
      .resize(125, 125)
      .toFile(outputFile).then(info => { console.log(info) })
      .catch((error) => console.log(error.message))
  } catch (error) {
    console.log(error.message);
  }

})

export default app;
