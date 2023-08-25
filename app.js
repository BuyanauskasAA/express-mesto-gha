const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const { PORT = 3000 } = process.env;

mongoose
  .connect('mongodb://localhost:27017/mestodb', {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Database connected');
  });

const app = express();

app.use((req, res, next) => {
  req.user = {
    _id: '64e89a671e82d04b11d439c1',
  };

  next();
});

app.use(bodyParser.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is runnig on port ${PORT}`);
});
