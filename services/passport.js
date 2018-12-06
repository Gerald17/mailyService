const
passport = require('passport'),
googleStrategy = require('passport-google-oauth20'),
mongoose = require('mongoose'),
keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use('google', new googleStrategy({
          clientID: keys.googleClientID,
          clientSecret: keys.googleClientSecret,
          callbackURL: '/auth/google/callback',
          proxy: true
      },
      async (accessToken, refreshToken, profile, done) => {        
        let existingUser = await User.findOne({ googleId: profile.id });        
        if(existingUser){
          return done(null, existingUser);
        }        
        const user = await new User({ googleId: profile.id }).save();
        done(null, user);        
    }));