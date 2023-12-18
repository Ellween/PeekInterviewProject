import express from 'express';
import dotenv from 'dotenv';
import speechRoutes from './routes/speechRoutes';

const app = express();
app.use(express.json());
dotenv.config();


app.use('/', speechRoutes);

export default app;