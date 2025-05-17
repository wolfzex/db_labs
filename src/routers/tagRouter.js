import express from 'express';
import {
  createTag,
  listTags,
  getTag,
  updateTag,
  removeTag,
} from '../controllers/tagController.js';

const tagRouter = new express.Router();

tagRouter.post('/tag', createTag);
tagRouter.get('/tag', listTags);
tagRouter.get('/tag/:id', getTag);
tagRouter.patch('/tag/:id', updateTag);
tagRouter.delete('/tag/:id', removeTag);

export default tagRouter;