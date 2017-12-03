// Configuration files recognized by the system are named as 'config.<env>.js',
// where <env> is the NODE_ENV setting used when starting the application.
// Possible <env> values are: development, test, production.
"use strict";

import dev from './environments/dev';
import prod from './environments/prod';

let config = {
    dev: dev,
    prod: prod
};

export default config;
