
'use strict';

import fs from 'fs';
import path from 'path';
import express from 'express';
import app from './api';

let appServer = express();
// let logger = require('./lib/logger');

// TODO:Will have to get the port from the config
appServer.set('port', (process.env.PORT || 3000));

app.listen(appServer.get('port'), function() {
  //  logger.info("Listening on port",appServer.get('port'));
   console.log("Listening on port",appServer.get('port'));
});


// TODO: Promise received from db conneciton will be handled here
// app.ready.then(function () {
//     app.app.listen(appServer.get('port'), function() {
//         logger.info("Listening on port",appServer.get('port'));
//         console.log("Listening on port",appServer.get('port'));
//     });
// });
