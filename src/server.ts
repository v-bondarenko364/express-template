import winston from 'winston';

import app from './app';

const PORT = Number(process.env.PORT) || 8081;

app.listen(PORT, () => {
  winston.info(`Express server listening on port ${PORT}`);
});
