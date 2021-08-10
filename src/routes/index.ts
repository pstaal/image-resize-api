import express from 'express';
const routes = express.Router();
import imageApi from './api/image-api';

routes.get('/', (req,res)=> {
  res.send('Main api route!')
});

routes.use('/image', imageApi);

export default routes;


