module.exports = {
    //google auth
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,

    //db connection string
    dbConnection: process.env.DB_CONNECTION,

    //cookie key
    cookieKey: process.env.COOKIE_KEY
}

// production {"web":{"client_id":"858317661100-ofl2srmjpgg88cva4780r8091pm8bj1b.apps.googleusercontent.com","project_id":"maily-dev-223304","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://www.googleapis.com/oauth2/v3/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"eR3RgmIYOUEilLT_KZUWcENh"}}
