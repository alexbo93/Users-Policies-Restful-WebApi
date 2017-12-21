// In this configuration file all values are exactly the same as
// dev configuration. That's because this is just a simulation of a real deployed
// api in which there might be more than one configuration.

let prod = {
    // Express configuration settings.
    express: {
        port: 3000,            // Can also be specified through the PORT environment variable. If omitted, defaults to 3000.
    },
    mongodb: {
        server: 'ds129386.mlab.com:29386',
        user: 'userspolicies',
        password: '6ph6!nRBtTz<b{;<',
        database: 'userspolicies',
    },
    auth: {
        clientSecret: 'secret',
    }
}

export default prod;
