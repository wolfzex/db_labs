import handleAsync from '../utils/handleAsync.js';
import {
  insertSource,
  getAllSources,
  getSourceById,
  updateSourceById,
  deleteSourceById,
} from '../models/sourceModel.js';
import AppError from '../utils/appError.js';
import { validateRequiredSourceFields } from '../utils/validator.js';

export const createSource = handleAsync(async (req, res) => {
  const sourceData = req.body;
  validateRequiredSourceFields(sourceData);

  const newSource = await insertSource(sourceData);
  res.status(201).json({ status: 'success', data: newSource });
});

export const listSources = handleAsync(async (req, res) => {
  const sources = await getAllSources();
  res.status(200).json({ status: 'success', results: sources.length, data: sources });
});

export const getSource = handleAsync(async (req, res) => {
  const { id } = req.params;
  const source = await getSourceById(id);

  if (!source) {
    throw new AppError('SourceNotFoundException: No source found with that ID', 404);
  }

  res.status(200).json({ status: 'success', data: source });
});

export const updateSource = handleAsync(async (req, res) => {
  const { id } = req.params;
  const sourceData = req.body;

  if (Object.keys(sourceData).length === 0) {
    throw new AppError('NoFieldsToUpdateException: No fields provided for update.', 400);
  }

  const updatedSource = await updateSourceById(id, sourceData);

  if (!updatedSource) {
    throw new AppError('SourceNotFoundException: No source found with that ID to update', 404);
  }

  res.status(200).json({
    status: 'success',
    message: 'Source updated successfully',
    data: updatedSource,
  });
});

export const removeSource = handleAsync(async (req, res) => {
  const { id } = req.params;
  const deletedSource = await deleteSourceById(id);

  if (!deletedSource) {
    throw new AppError('SourceNotFoundException: No source found with that ID to delete', 404);
  }

  res.status(200).json({ status: 'success', message: 'Source deleted successfully', data: null });
});