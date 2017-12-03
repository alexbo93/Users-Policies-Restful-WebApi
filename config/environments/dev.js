let dev = {
    // Express configuration settings.
    express: {
        port: 3000,            // Can also be specified through the PORT environment variable. If omitted, defaults to 3000.
        trustProxy: undefined  // Express' "trust proxy" settings. See http://expressjs.com/en/api.html#trust.proxy.options.table
    },
    // MSSQL configuration settings.
    // Documentation on all possible settings can be found at
    // https://github.com/patriksimek/node-mssql#configuration-1
    mongodb: {
        server: 'ds129386.mlab.com:29386',    // Can be also specified through the MSSQL_SERVER environment variable.
        user: 'userspolicies',        // Can be also specified through the MSSQL_USER environment variable.
        password: '6ph6!nRBtT:<b{;<',    // Can be also specified through the MSSQL_PASSWORD environment variable.
        database: 'userspolicies',  // Can be also specified through the MSSQL_DATABASE environment variable.
    },
    // OAuth2 configuration settings.
    oauth2: {
        authorizationURL: 'https://www.provider.com/oauth2/authorize',  // Can also be specified through the OAUTH2_AUTHURL environment variable.
        tokenURL: 'https://www.provider.com/oauth2/token',              // Can also be specified through the OAUTH2_TOKENURL environment variable.
        clientID: '123-456-789',                                        // Can also be specified through the OAUTH2_CLIENTID environment variable.
        clientSecret: 'secret',                                         // Can also be specified through the OAUTH2_CLIENTSECRET environment variable.
        tokenParams: {                                                  // Can also be specified through the OAUTH2_TOKENPARAMS environment variables as a JSON string.
            resource: 'resourceId'
        },
        jwks: {
            // Public keys or certificates to be used for JWT verification.
            url: 'https://www.provider.com/keys',                       // Can also be specified through the OAUTH2_JWKS_URL environment variable.
            keys: [                                                     // Can also be specified through the OAUTH2_JWKS_KEYS environment variable as a JSON string.
                {
                    kty: "RSA",
                    use: "sig",
                    kid: "Key ID 1",
                    x5t: "YbRAQRYcE",
                    n: "vbcFrj193Gm6zeo5e2_y54Jx49sIgScv-2JO-n6NxNqQaKVnMkHcz",
                    e: "AQAB",
                    x5c: ["MIIC4jCCAcqgAwIBAgIQfQ29fkGSsb1J8n2KueDFtDANBgkqhkiG9w0BAQsFADAt"]
                },
                {
                    kid: 'Key ID 2',
                    pem: '-----BEGIN CERTIFICATE-----\n' +
                    'MWI0NTNmZGQtYmU1YS00YWY3LWEwNWEtZTc5MjgwMTc5MzcxDQpmNTdkMTA2ZC0w\n' +
                    'YmFlLTRlNmYtOWNmYi03NWM0ZmY2ODkxMTc=\n' +
                    '-----END CERTIFICATE-----'
                }
            ]
        }
    }
}

export default dev;
