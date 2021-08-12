import express from 'express';
import routes from './routes/index';
import Debug from 'debug';
const log = Debug('http');

const app = express();
const port = 3000;

app.listen(port, () => {
  log('server started');
});

app.use('/api', routes);

export default app;
