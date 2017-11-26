'use strict';

import fs from 'fs';
import path from 'path';
import express from 'express';

let app = express();
// let logger = require('./lib/logger');

app.set('port', (process.env.PORT || 3000));

// Let's import index.js from routes folder with routes for each object
require('./api/routes');
app.listen(app.get('port'), function() {
  //  logger.info("Listening on port",app.get('port'));
   console.log("Listening on port",app.get('port'));
});
