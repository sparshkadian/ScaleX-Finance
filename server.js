import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';

const port = process.env.PORT || 4100;

app.listen(port, () => {
  console.log(`Server is listening on Port:${port}`);
});

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log('DB Connection Successfull');
  })
  .catch((err) => {
    console.log('Error Connecting to DB', err);
  });
