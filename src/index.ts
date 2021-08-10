import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.use('/api', routes);


export default app;
