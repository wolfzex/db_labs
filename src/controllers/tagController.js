import handleAsync from '../utils/handleAsync.js';
import {
  insertTag,
  getAllTags,
  getTagById,
  updateTagById,
  deleteTagById,
} from '../models/tagModel.js';
import AppError from '../utils/appError.js';
import { validateRequiredTagFields } from '../utils/validator.js'; 

export const createTag = handleAsync(async (req, res) => {
  const tagData = req.body;
  validateRequiredTagFields(tagData);

  const newTag = await insertTag(tagData);
  res.status(201).json({ status: 'success', data: newTag });
});

export const listTags = handleAsync(async (req, res) => {
  const tags = await getAllTags();
  res.status(200).json({ status: 'success', results: tags.length, data: tags });
});

export const getTag = handleAsync(async (req, res) => {
  const { id } = req.params;
  const tag = await getTagById(id);

  if (!tag) {
    throw new AppError('TagNotFoundException: No tag found with that ID', 404);
  }

  res.status(200).json({ status: 'success', data: tag });
});

export const updateTag = handleAsync(async (req, res) => {
  const { id } = req.params;
  const tagData = req.body;

  if (Object.keys(tagData).length === 0) {
    throw new AppError('NoFieldsToUpdateException: No fields provided for update.', 400);
  }
  
  const updatedTag = await updateTagById(id, tagData);

  if (!updatedTag) {
    throw new AppError('TagNotFoundException: No tag found with that ID to update', 404);
  }

  res.status(200).json({
    status: 'success',
    message: 'Tag updated successfully',
    data: updatedTag,
  });
});

export const removeTag = handleAsync(async (req, res) => {
  const { id } = req.params;
  const deletedTag = await deleteTagById(id);

  if (!deletedTag) {
    throw new AppError('TagNotFoundException: No tag found with that ID to delete', 404);
  }

  res.status(200).json({ status: 'success', message: 'Tag deleted successfully', data: null });
});