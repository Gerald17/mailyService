module.exports = {
    //google auth
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,

    //db connection string
    dbConnection: process.env.DB_CONNECTION,

    //cookie key
    cookieKey: process.env.COOKIE_KEY,
    

    //stripe
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY
}
