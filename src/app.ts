import express from 'express';
import cors from 'cors';
import path from 'path';

import Routes from './routes';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// allow cross origin requests
// TODO: configure to only allow requests from certain origins
app.use(cors());

Routes.routes(app);

export default app;
