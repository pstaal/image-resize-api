import express from 'express';
import sharp from 'sharp';
import path from 'path';

const app = express();
const port = 3000;
const inputFile = path.resolve('images/full', "fjord.jpg");
const outputFile = path.resolve("images/thumb", "output.jpg");

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
