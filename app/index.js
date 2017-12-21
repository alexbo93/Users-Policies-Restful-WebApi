
'use strict';

import fs from 'fs';
import path from 'path';
import express from 'express';
import app from './api';
import config from '../config'

let appServer = express();
// let logger = require('./lib/logger');

appServer.set('port', (process.env.PORT || config.dev.express.port));

app.listen(appServer.get('port'), function() {
  //  logger.info("Listening on port",appServer.get('port'));
   console.log("Listening on port",appServer.get('port'));
});
