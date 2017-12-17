"use strict";
import express from 'express';
import routes from './routes';
import config from '../config';
import mongoose from 'mongoose';
import db from './db';

let app = express();

// TODO: Set current config
// let current = config.dev;
// if(app.get('env') === 'production') {
//     current = config.prod;
// }

// Will have to get the port from the config
app.use('/', routes);

// Export the app object with the connections and the routes
// and the established conneciton with the database
export default app;
