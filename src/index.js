const express = require('express');
const db = require('./db');
const config = require('./shared/config');
const categoriesRoute = require('./models/categories/_api');
const advertisingRoute = require('./models/advertisings/_api');
const { errorHandler } = require('./shared/errors');

const app = express();

app.use(express.json());

app.use(categoriesRoute);
app.use(advertisingRoute);

app.use(errorHandler);

db.sync({ force: true, logging: false })
  .then(() => {
    console.log('DB ga ulandi');
  })
  .catch((err) => {
    console.log('DBga ulanishda xatolik yuz berdi', err);
  });

const PORT = config.PORT || 4000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});