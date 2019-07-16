require('./config');
import "reflect-metadata";
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as express from 'express';

// Importing Dependency Injection file
import container from './inversify.config';

const APP_HOST = process.env.APP_HOST || 'localhost';
const APP_PORT = parseInt(process.env.APP_PORT) || 3000;

// create inversify server
const server = new InversifyExpressServer(container, null, { rootPath: '/api/v1' });
server.setConfig((app) => {
  const logger = morgan('combined');
  app.use(logger);
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(helmet());
  app.use(cors());
  app.set('view engine', 'pug');
  app.set('views', __dirname + '/templates');
});


const app = server.build();

app.listen(APP_PORT, APP_HOST, (error) => {
  if (error) {
    console.log('Problem starting application: ', error)
    throw Error(error)
  }
  console.log(`Application Started, listening on ${APP_HOST}:${APP_PORT}`)
});

export default app;
