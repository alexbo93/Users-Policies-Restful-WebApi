"use strict";
import express from 'express';
import routes from './routes';
import config from '../config';
import mongoose from 'mongoose';

let app = express();

// TODO: Set current config
let current = config.dev;
if(app.get('env') === 'production') {
    current = config.prod;
}

let db_endpoint = `mongodb://${current.mongodb.user}${current.mongodb.password}@${current.mongodb.server}/${current.mongodb.database}`;

// TODO: Create and enable connection to the database
let db_ready = mongoose.connect(db_endpoint, {useMongoClient: true}, (err, db) => {
  if(err) {
    console.log('Error connecting to the DB'+err);
  }else{
    console.log('DB connection succesfull');
  }
})


// Will have to get the port from the config
app.use('/', routes);

// Export the app object with the connections and the routes
// and the established conneciton with the database
export default app;
