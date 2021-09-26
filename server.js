import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

import router from './router.js';

const { DB_URL } = process.env;

const app = express();
const port = 3000;

app.use(router);

const dbUrl = DB_URL;

app.listen(port, async () => {

  await mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(`Example app listening at http://localhost:${port}`)
});


