import db from '../config/db.js';
import AppError from '../utils/appError.js';

export const insertTag = async (tagData) => {
  const { name } = tagData;
  const query = `
    INSERT INTO Tag (name)
    VALUES ($1)
    RETURNING *;
  `;
  const values = [name];
  try {
    const result = await db.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw new AppError(`Error inserting tag: ${error.message}`, 500);
  }
};

export const getAllTags = async () => {
  const query = `SELECT * FROM Tag`;
  try {
    const result = await db.query(query);
    return result.rows;
  } catch (error) {
    throw new AppError(`Error fetching all tags: ${error.message}`, 500);
  }
};

export const getTagById = async (id) => {
  const query = `SELECT * FROM Tag WHERE id = $1`;
  try {
    const result = await db.query(query, [id]);
    return result.rows[0] || null;
  } catch (error) {
    throw new AppError(`Error fetching tag by ID: ${error.message}`, 500);
  }
};

export const updateTagById = async (id, tagData) => {
  const fields = Object.keys(tagData);
  const values = Object.values(tagData);

  if (fields.length === 0) {
    throw new AppError('NoFieldsToUpdateException: No fields provided for update.', 400);
  }

  const setClause = fields
    .map((field, index) => `${field} = $${index + 1}`)
    .join(', ');
  const query = `
      UPDATE Tag
      SET ${setClause}
      WHERE id = $${fields.length + 1}
    RETURNING *;
  `;
  try {
    const result = await db.query(query, [...values, id]);
    return result.rows[0];
  } catch (error) {
    throw new AppError(`Error updating tag: ${error.message}`, 500);
  }
};

export const deleteTagById = async (id) => {
  const query = `DELETE FROM Tag WHERE id = $1 RETURNING *`;
  try {
    const result = await db.query(query, [id]);
    return result.rows[0] || null; 
  } catch (error) {
    throw new AppError(`Error deleting tag: ${error.message}`, 500);
  }
};