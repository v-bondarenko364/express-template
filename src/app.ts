import express from 'express';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';

import convertObjectIdsToStrings from './config/mongoose-extension';
import Routes from './routes';
import LoggerService from './services/logger.service';

LoggerService.initializeLogger();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

convertObjectIdsToStrings();

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

Routes.routes(app);

export default app;
