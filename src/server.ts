import app from './app';

const PORT = Number(process.env.PORT) || 8081;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express server listening on port ${PORT}`);
});
