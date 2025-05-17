import db from '../config/db.js';
import AppError from '../utils/appError.js';

export const insertSource = async (sourceData) => {
  const { name, url } = sourceData;
  const query = `
    INSERT INTO Source (name, url)
    VALUES ($1, $2)
    RETURNING *;
  `;
  const values = [name, url];
  try {
    const result = await db.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw new AppError(`Error inserting source: ${error.message}`, 500);
  }
};

export const getAllSources = async () => {
  const query = `SELECT * FROM Source`;
  try {
    const result = await db.query(query);
    return result.rows;
  } catch (error) {
    throw new AppError(`Error fetching all sources: ${error.message}`, 500);
  }
};

export const getSourceById = async (id) => {
  const query = `SELECT * FROM Source WHERE id = $1`;
  try {
    const result = await db.query(query, [id]);
    return result.rows[0] || null;
  } catch (error) {
    throw new AppError(`Error fetching source by ID: ${error.message}`, 500);
  }
};

export const updateSourceById = async (id, sourceData) => {
  const fields = Object.keys(sourceData);
  const values = Object.values(sourceData);

  if (fields.length === 0) {
    throw new AppError('NoFieldsToUpdateException: No fields provided for update.', 400);
  }

  const setClause = fields
    .map((field, index) => `${field} = $${index + 1}`)
    .join(', ');
  const query = `
      UPDATE Source
      SET ${setClause}
      WHERE id = $${fields.length + 1}
    RETURNING *;
  `;
  try {
    const result = await db.query(query, [...values, id]);
    return result.rows[0];
  } catch (error) {
    throw new AppError(`Error updating source: ${error.message}`, 500);
  }
};

export const deleteSourceById = async (id) => {
  const query = `DELETE FROM Source WHERE id = $1 RETURNING *`;
  try {
    const result = await db.query(query, [id]);
    return result.rows[0] || null; 
  } catch (error) {
    throw new AppError(`Error deleting source: ${error.message}`, 500);
  }
};