let dev = {
    // Express configuration settings.
    express: {
        port: 3000,            // Can also be specified through the PORT environment variable. If omitted, defaults to 3000.
        trustProxy: undefined  // Express' "trust proxy" settings. See http://expressjs.com/en/api.html#trust.proxy.options.table
    },
    mongodb: {
        server: 'ds129386.mlab.com:29386',    // Can be also specified through the MSSQL_SERVER environment variable.
        user: 'userspolicies',        // Can be also specified through the MSSQL_USER environment variable.
        password: '6ph6!nRBtTz<b{;<',    // Can be also specified through the MSSQL_PASSWORD environment variable.
        database: 'userspolicies',  // Can be also specified through the MSSQL_DATABASE environment variable.
    },
    auth: {
        clientSecret: 'secret',
    }
}

export default dev;
