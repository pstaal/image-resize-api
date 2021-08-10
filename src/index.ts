import express from 'express';
import sharp from 'sharp';
import path from 'path';
import routes from './routes/index';

const app = express();
const port = 3000;
const inputFile = path.resolve('images/full', "fjord.jpg");
const outputFile = path.resolve("images/thumb", "output.jpg");

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.use('/main', routes);


export default app;
