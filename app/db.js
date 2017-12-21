"use strict";
import config from './config';
import mongoose from 'mongoose';

let current = config.dev;
// if(app.get('env') === 'production') {
//     current = config.prod;
// }

const db_endpoint = `mongodb://${current.mongodb.user}:${current.mongodb.password}@${current.mongodb.server}/${current.mongodb.database}`;
let db = mongoose.connect(db_endpoint, {useMongoClient: true}, (err, db) => {
  if(err) {
    console.log('Error connecting to the DB '+err);
  }else{
    console.log('DB connection successful');
  }
})

export default db;
