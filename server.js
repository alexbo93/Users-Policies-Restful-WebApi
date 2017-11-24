'use strict';

var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
// let logger = require('./lib/logger');

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
   logger.info("Listening on port",app.get('port'));
   console.log("Listening on port",app.get('port'));
});
