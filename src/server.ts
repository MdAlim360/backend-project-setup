import mongoose from 'mongoose';
import { Server } from 'http';
import config from './app/config';
import app from './app';

let server: Server;

try {
  mongoose.connect(config.database_url as string);
  server = app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
  });
} catch (error) {
  console.log(error);
}
