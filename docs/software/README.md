# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення бази даних

```sql

CREATE TABLE Profile
(
    id         SERIAL PRIMARY KEY,
    first_name VARCHAR(45)  NOT NULL,
    last_name  VARCHAR(45)  NOT NULL,
    email      VARCHAR(255) NOT NULL UNIQUE,
    password   VARCHAR(255) NOT NULL
);

CREATE TABLE MediaContent
(
    id           SERIAL PRIMARY KEY,
    title        VARCHAR(100) NOT NULL,
    description  TEXT,
    body         TEXT         NOT NULL,
    content_type VARCHAR(45)  NOT NULL,
    created_at   DATE DEFAULT CURRENT_DATE,
    profile_id   INT          NOT NULL,
    FOREIGN KEY (profile_id) REFERENCES Profile (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Role
(
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(45) NOT NULL,
    description VARCHAR(45) NOT NULL
);

CREATE TABLE Permission
(
    id   SERIAL PRIMARY KEY,
    name VARCHAR(45) NOT NULL
);

CREATE TABLE RolePermission
(
    role_id       INT NOT NULL,
    permission_id INT NOT NULL,
    PRIMARY KEY (role_id, permission_id),
    FOREIGN KEY (role_id) REFERENCES Role (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (permission_id) REFERENCES Permission (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE AnalysisReport
(
    id         SERIAL PRIMARY KEY,
    title      VARCHAR(45)  NOT NULL,
    body       VARCHAR(255) NOT NULL,
    created_at DATE DEFAULT CURRENT_DATE,
    profile_id INT          NOT NULL,
    FOREIGN KEY (profile_id) REFERENCES Profile (id) ON DELETE CASCADE ON UPDATE CASCADE

);

CREATE TABLE AnalysisResult
(
    id                SERIAL PRIMARY KEY,
    title             VARCHAR(45)  NOT NULL,
    description       VARCHAR(255),
    body              VARCHAR(255) NOT NULL,
    created_at        DATE DEFAULT CURRENT_DATE,
    analysisReport_id INT          NOT NULL,
    profile_id        INT          NOT NULL,
    FOREIGN KEY (analysisReport_id) REFERENCES AnalysisReport (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (profile_id) REFERENCES Profile (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE MediaContentAnalysisResult
(
    mediaContent_id   INT NOT NULL,
    analysisResult_id INT NOT NULL,
    PRIMARY KEY (mediaContent_id, analysisResult_id),
    FOREIGN KEY (mediaContent_id) REFERENCES MediaContent (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (analysisResult_id) REFERENCES AnalysisResult (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Tag
(
    id   SERIAL PRIMARY KEY,
    name VARCHAR(45) NOT NULL
);

CREATE TABLE AnalysisResultTag
(
    analysisResult_id INT NOT NULL,
    tag_id            INT NOT NULL,
    PRIMARY KEY (analysisResult_id, tag_id),
    FOREIGN KEY (analysisResult_id) REFERENCES AnalysisResult (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES Tag (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Source
(
    id   SERIAL PRIMARY KEY,
    name VARCHAR(45)  NOT NULL,
    url  VARCHAR(255) NOT NULL
);

CREATE TABLE SourceTag
(
    tag_id    INT NOT NULL,
    source_id INT NOT NULL,
    PRIMARY KEY (tag_id, source_id),
    FOREIGN KEY (tag_id) REFERENCES Tag (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (source_id) REFERENCES Source (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE MediaContentTag
(
    tag_id          INT NOT NULL,
    mediaContent_id INT NOT NULL,
    PRIMARY KEY (tag_id, mediaContent_id),
    FOREIGN KEY (tag_id) REFERENCES Tag (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (mediaContent_id) REFERENCES MediaContent (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE MediaContentSource
(
    source_id       INT NOT NULL,
    mediaContent_id INT NOT NULL,
    PRIMARY KEY (source_id, mediaContent_id),
    FOREIGN KEY (source_id) REFERENCES Source (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (mediaContent_id) REFERENCES MediaContent (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE UserRole
(
    profile_id INT NOT NULL,
    role_id    INT NOT NULL,
    PRIMARY KEY (profile_id, role_id),
    FOREIGN KEY (profile_id) REFERENCES Profile (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (role_id) REFERENCES Role (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE AnalysisReportTag
(
    analysisReport_id INT NOT NULL,
    tag_id            INT NOT NULL,
    PRIMARY KEY (analysisReport_id, tag_id),
    FOREIGN KEY (analysisReport_id) REFERENCES AnalysisReport (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES Tag (id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO Profile (id, first_name, last_name, email, password)
VALUES (1, 'Lea', 'Seydoux', 'lea.seydoux@example.com', 'bestever!'),
       (2, 'Emily', 'Nguyen', 'emily.n@example.org', 'emNg@2023'),
       (3, 'Carlos', 'Ramos', 'carlos.ramos@mail.com', 'r@mos918'),
       (4, 'Aisha', 'Singh', 'aisha_singh@domain.com', 'aish@1020'),
       (5, 'Henry', 'Kim', 'henry.kim@abc.com', 'hkim8823'),
       (6, 'Maria', 'Ivanova', 'maria.ivanova@mail.ru', 'miV1234'),
       (7, 'Liam', 'Wong', 'liam.wong@site.net', 'wongpass99'),
       (8, 'Sophia', 'Berg', 'sophia.berg@email.com', 'berG4321'),
       (9, 'Noah', 'Schmidt', 'noah.schmidt@example.net', 'nSchm890'),
       (10, 'Isabella', 'Ricci', 'isa.ricci@provider.org', 'isRicci_77');

INSERT INTO Role (id, name, description)
VALUES (1, 'Viewer', 'Basic access for content viewing'),
       (2, 'Analyst', 'Has permission to analyze and moderate content');

INSERT INTO Permission (id, name)
VALUES (1, 'access.reports'),
       (2, 'user.suspend'),
       (3, 'media.upload'),
       (4, 'media.search'),
       (5, 'media.edit'),
       (6, 'media.remove');

INSERT INTO Tag (name)
VALUES ('Biology'),
       ('AI & Robotics'),
       ('Nutrition'),
       ('Adventure'),
       ('Climate'),
       ('Astrophysics'),
       ('Blockchain'),
       ('Green Tech'),
       ('eSports'),
       ('Pharmaceuticals'),
       ('Trend Analysis'),
       ('User Sentiment'),
       ('New Product'),
       ('Sales Trends'),
       ('Team Feedback'),
       ('Influencer Reach'),
       ('Competitive Review'),
       ('Fleet Management'),
       ('UX Research');

INSERT INTO Source (name, url)
VALUES ('BBC Earth', 'https://www.bbcearth.com'),
       ('Wired', 'https://www.wired.com'),
       ('ESA', 'https://www.esa.int'),
       ('WebMD', 'https://www.webmd.com'),
       ('Scientific American', 'https://www.scientificamerican.com'),
       ('Lonely Planet', 'https://www.lonelyplanet.com'),
       ('Vimeo', 'https://vimeo.com'),
       ('IGN', 'https://www.ign.com'),
       ('Xbox Wire', 'https://news.xbox.com'),
       ('HealthTech Weekly', 'https://www.healthtechweekly.com');

INSERT INTO MediaContent (id, title, description, body, content_type, created_at, profile_id)
VALUES (1, 'Deep Sea Creatures', 'Rare and fascinating sea animals in their natural habitat.',
        'Exploration of marine biodiversity in deep-sea ecosystems.', 'Article', '2024-11-01', 1),
       (2, 'Rise of Generative AI', 'How generative models are reshaping the future.',
        'Breakthroughs in text and image generation using AI.', 'Article', '2024-11-02', 2),
       (3, 'Journey to Saturn', 'ESAs latest mission beyond Jupiter.', 'https://youtu.be/saturn-exploration', 'Video',
        '2024-11-03', 3),
       (4, 'Balanced Diet 101', 'Everyday tips for a healthier diet.',
        'https://www.webmd.com/healthy-eating/guide/default.htm', 'Blog Post', '2024-11-04', 4),
       (5, 'What is Blockchain?', 'Explaining distributed ledger tech in simple terms.',
        'Blockchain could redefine data security and verification.', 'Article', '2024-11-05', 5),
       (6, 'Best Hidden Islands to Visit', 'Underrated travel spots away from the crowds.',
        'https://www.lonelyplanet.com/hidden-islands', 'Blog Post', '2024-12-06', 6),
       (7, 'Future of Solar Tech', 'Innovations in photovoltaic energy.', 'https://vimeo.com/future-solar', 'Video',
        '2024-12-07', 7),
       (8, 'Futuristic Metropolis Art', 'Concept art of neon-soaked future cities.',
        'https://www.ign.com/images/futurecity.jpg', 'Image', '2024-12-08', 8),
       (9, 'Frozen Combat Scene', 'Warrior duels monster atop icy cliff.',
        'https://news.xbox.com/images/fight_scene.jpeg', 'Image', '2024-12-09', 9),
       (10, 'Telemedicine Expansion', 'How tech is bridging healthcare gaps.',
        'Digital health tools are transforming care delivery.', 'Article', '2024-12-10', 10);

INSERT INTO AnalysisReport (id, title, body, created_at, profile_id)
VALUES (1, 'Energy Consumption Review', 'Detailed breakdown of energy usage across departments.', '2024-01-01', 1),
       (2, 'Emerging Tech Forecast', 'Predictions and implications of new technology trends.', '2024-01-02', 2),
       (3, 'User Experience Audit', 'Evaluation of UX design across major customer touchpoints.', '2024-01-03', 1),
       (4, 'Sales Funnel Optimization', 'Insights into conversion rates and funnel drop-offs.', '2024-01-04', 3),
       (5, 'Q4 Revenue Projection', 'Projected earnings based on updated financial inputs.', '2024-01-05', 2),
       (6, 'Remote Work Assessment', 'Review of employee productivity in remote environments.', '2024-01-06', 4),
       (7, 'Influencer Campaign Metrics', 'Performance metrics from recent influencer collaborations.', '2024-01-07',
        1),
       (8, 'Product Comparison Study', 'Side-by-side evaluation of feature sets and pricing.', '2024-01-08', 3),
       (9, 'Logistics Process Review', 'Inspection of delivery timelines and carrier efficiency.', '2024-01-09', 4),
       (10, 'Digital Engagement Report', 'Analysis of user interactions across digital platforms.', '2024-01-10', 2);

INSERT INTO RolePermission (role_id, permission_id)
VALUES (2, 1),
       (2, 2),
       (1, 3),
       (2, 3),
       (1, 4),
       (2, 4),
       (1, 5),
       (2, 5),
       (1, 6),
       (2, 6);

INSERT INTO UserRole (profile_id, role_id)
VALUES (1, 1),
       (1, 2),
       (2, 2),
       (3, 1),
       (3, 2),
       (4, 1),
       (5, 2),
       (6, 1),
       (7, 2),
       (8, 1),
       (8, 2);

INSERT INTO AnalysisResult (id, title, description, body, created_at, analysisReport_id, profile_id)
VALUES (1, 'Energy Efficiency Metrics', 'Key insights into departmental energy usage.',
        'The report outlines major inefficiencies and improvement areas.', '2024-02-01', 1, 1),
       (2, 'Tech Disruption Impact', 'Exploration of tech trends affecting our sector.',
        'Analysis covers disruption risks and opportunities.', '2024-02-02', 2, 2),
       (3, 'UX Improvement Areas', 'Identified friction points in the user journey.',
        'Recommendations for enhancing user satisfaction.', '2024-02-03', 3, 1),
       (4, 'Conversion Rate Patterns', 'Insights into sales funnel behavior.',
        'Identifies drop-off points and engagement gaps.', '2024-02-04', 4, 3),
       (5, 'Revenue Trends Summary', 'Forecast and actuals comparison for Q4.',
        'Discusses variance and underlying revenue patterns.', '2024-02-05', 5, 2),
       (6, 'Remote Workflow Insights', 'Challenges and benefits of remote operations.',
        'Data suggests new norms in communication and output.', '2024-02-06', 6, 4),
       (7, 'Influencer ROI Review', 'Return on investment from influencer campaigns.',
        'Analysis includes reach, clicks, and conversions.', '2024-02-07', 7, 1),
       (8, 'Feature Competitiveness Score', 'Assessment of key product features vs competitors.',
        'Shows relative strengths and market gaps.', '2024-02-08', 8, 3),
       (9, 'Shipment Performance Report', 'Efficiency and delay analysis in order fulfillment.',
        'Findings indicate improvement in 2-day delivery rates.', '2024-02-09', 9, 4),
       (10, 'Digital Pathway Evaluation', 'User actions across marketing funnels.',
        'Breakdown of entry points, drop-offs, and conversions.', '2024-02-10', 10, 2);

INSERT INTO MediaContentAnalysisResult (mediaContent_id, analysisResult_id)
VALUES (1, 1),
       (2, 2),
       (3, 3),
       (4, 4),
       (5, 5),
       (6, 6),
       (7, 7),
       (8, 8),
       (9, 9),
       (10, 10),
       (1, 2),
       (2, 3),
       (3, 4),
       (4, 5),
       (5, 6),
       (6, 7),
       (7, 8),
       (8, 9),
       (9, 10),
       (10, 1);


INSERT INTO MediaContentSource (source_id, mediaContent_id)
VALUES (1, 1),
       (1, 10),
       (2, 2),
       (2, 9),
       (3, 3),
       (3, 8),
       (4, 4),
       (4, 7),
       (5, 5),
       (5, 6),
       (6, 6),
       (6, 5),
       (7, 7),
       (7, 4),
       (8, 8),
       (8, 3),
       (9, 9),
       (9, 2),
       (10, 10),
       (10, 1);

INSERT INTO AnalysisResultTag (analysisResult_id, tag_id)
VALUES (1, 1),
       (1, 11),
       (2, 5),
       (2, 11),
       (3, 12),
       (4, 13),
       (5, 14),
       (6, 3),
       (6, 15),
       (7, 16),
       (8, 17),
       (9, 18),
       (10, 2),
       (10, 19);

INSERT INTO AnalysisReportTag (analysisReport_id, tag_id)
VALUES (1, 2),
       (2, 2),
       (3, 3),
       (4, 2),
       (5, 8),
       (6, 3),
       (7, 2),
       (8, 1),
       (9, 8),
       (10, 2);

INSERT INTO MediaContentTag (tag_id, mediaContent_id)
VALUES (1, 1),
       (1, 2),
       (1, 3),
       (1, 5),
       (1, 7),
       (1, 10),
       (2, 2),
       (2, 3),
       (2, 4),
       (2, 5),
       (2, 7),
       (2, 10),
       (3, 4),
       (3, 10),
       (4, 6),
       (5, 1),
       (5, 7),
       (6, 3),
       (7, 5),
       (8, 7),
       (9, 8),
       (9, 9),
       (10, 4),
       (10, 10);

INSERT INTO SourceTag (tag_id, source_id)
VALUES (1, 1),
       (1, 3),
       (1, 4),
       (1, 10),
       (2, 2),
       (2, 3),
       (2, 4),
       (2, 5),
       (2, 10),
       (3, 4),
       (3, 10),
       (4, 1),
       (4, 6),
       (5, 1),
       (6, 1),
       (6, 3),
       (7, 2),
       (7, 5),
       (8, 1),
       (9, 8),
       (9, 9),
       (10, 4),
       (10, 10);
```

## RESTfull сервіс для управління даними

### Підключення до бази даних
```js
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const db = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

export default db;
```

### App модуль та сервер
```js
import express from 'express';
import userRouter from './routers/userRouter.js';
import mediaContentRouter from './routers/mediaContentRouter.js';
import tagRouter from './routers/tagRouter.js';
import sourceRouter from './routers/sourceRouter.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

app.use(express.json());

app.use('/api', userRouter);
app.use('/api', mediaContentRouter);
app.use('/api', tagRouter);
app.use('/api', sourceRouter);

app.use(errorHandler);

export default app;
```

```js
import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 5000;

const start = () => {
  app.listen(port, () => console.log(`Server started on port ${port}`));
};
start();
```

### Маршрути для Tag та Source
```js
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
```

```js
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
```

### Контролери для Tag
```js
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
```

### Взаємодія з базою даних для Tag
```js
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
```

### Контролери для Source
```js
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
```

### Взаємодія з базою даних для Source
```js
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
```

### Мідлвар для обробки помилок
```js
const errorHandler = (err, req, res, next) => {
  console.error(err);

  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({ status: err.status, message: err.message });
};

export default errorHandler;
```

### Обгортка над функціями для перенаправлення помилок
```js
const handleAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

export default handleAsync;
```

### Валідатори для перевірки вхідних даних
```js
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
```

### Модифікований клас помилки
```js
export default class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';

    Error.captureStackTrace(this, this.constructor);
  }
}
```