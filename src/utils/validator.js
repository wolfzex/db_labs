import AppError from './appError.js';

export const validateRequiredFields = (data) => {
  const { first_name, last_name, email, password } = data;
  if (!first_name || !last_name || !email || !password) {
    throw new AppError('DataMissingException', 400);
  }
};

export const validateRequiredContentFields = (data) => {
  const { title, body, content_type, user_id } = data;

  if (!title || !body || !content_type || !user_id) {
    throw new AppError('RequiredFieldsMissingException', 400);
  }
};

export const validateRequiredTagFields = (data) => {
  const { name } = data;
  if (!name) {
    throw new AppError('DataMissingException: Tag name is required.', 400);
  }
};

export const validateRequiredSourceFields = (data) => {
  const { name, url } = data;
  if (!name || !url) {
    throw new AppError('DataMissingException: Source name and URL are required.', 400);
  }
  try {
    new URL(url);
  } catch (_) {
    throw new AppError('InvalidDataException: Invalid URL format.', 400);
  }
};