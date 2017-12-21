"use strict";
import express from 'express';
import routes from './routes';
import db from './db';
import bodyParser from 'body-parser';

let app = express();

// Following code lines allow set separate attributes inside the body of
// a post REST call.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

// Export the app object with the connections and the routes
// and the established conneciton with the database
export default app;
