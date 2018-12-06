const passport = require('passport');

module.exports = (app) => {
    // google string is a googleStrategy identifier it must be 'google'
    app.get('/auth/google', passport.authenticate('google', {
        scope: [ 
            'profile', 
            'email' 
        ]
    }));

    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req, res) => { res.redirect('/surveys/new')}
    );
    
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect("/");
    });

}