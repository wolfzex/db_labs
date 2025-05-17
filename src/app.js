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