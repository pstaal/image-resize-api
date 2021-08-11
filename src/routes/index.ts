import { Router, Request, Response } from "express";
const routes: Router = Router();
import imageApi from './api/image-api';

routes.get('/', (req: Request,res: Response)=> {
  res.send('Main api route!')
});

routes.use('/image', imageApi);

export default routes;


