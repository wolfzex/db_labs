import express from 'express';
import {
  createSource,
  listSources,
  getSource,
  updateSource,
  removeSource,
} from '../controllers/sourceController.js';

const sourceRouter = new express.Router();

sourceRouter.post('/source', createSource);
sourceRouter.get('/source', listSources);
sourceRouter.get('/source/:id', getSource);
sourceRouter.patch('/source/:id', updateSource);
sourceRouter.delete('/source/:id', removeSource);

export default sourceRouter;