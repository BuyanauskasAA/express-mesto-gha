const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const routes = require('./routes');

const { PORT = 3000, DB_URL = 'mongodb://localhost:27017/mestodb' } = process.env;

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Database connected');
  });

const app = express();

app.use((req, res, next) => {
  req.user = {
    _id: '64e8d397ddfece7c123848c7',
  };

  next();
});

app.use(helmet());

app.use(bodyParser.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is runnig on port ${PORT}`);
});
