import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import router from './router';

mongoose.connect("mongodb://localhost/tournament");

const app = express();

app.use(morgan('dev'));

app.use('/v1', router)



const server = app.listen(3000, () => {
  const { address, port } = server.address()
  console.log(`Listening for http://${address}:${port}`)
});
