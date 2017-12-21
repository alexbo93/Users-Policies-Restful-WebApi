
'use strict';

import express from 'express';
import app from './api';
import config from './config'

let appServer = express();

appServer.set('port', (process.env.PORT || config.dev.express.port));

app.listen(appServer.get('port'), () => {
  //  logger.info("Listening on port",appServer.get('port'));
   console.log("Listening on port",appServer.get('port'));
});

export default app;
