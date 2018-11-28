module.exports = {
    //google auth
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,

    //db connection string
    dbConnection: process.env.DB_CONNECTION,

    //cookie key
    cookieKey: process.env.COOKIE_KEY
}

// production {"web":{"client_id":"496604403355-nr04fh9gqb1kgel9nd8c1selirsoc8bl.apps.googleusercontent.com","project_id":"maily-prod-223921","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://www.googleapis.com/oauth2/v3/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"bgMY3GmRIB1zaHUI8um6k4OG","redirect_uris":["https://fast-woodland-26950.herokuapp.com/auth/google/callback"],"javascript_origins":["https://fast-woodland-26950.herokuapp.com"]}}
