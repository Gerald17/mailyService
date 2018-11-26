const passport = require('passport');

module.exports = (app) => {
    // google string is a googleStrategy identifier it must be 'google'
    app.get('/auth/google', passport.authenticate('google', {
        scope: [ 
            'profile', 
            'email' 
        ]
    }));

    app.get('/auth/google/callback', passport.authenticate('google'));
    
}