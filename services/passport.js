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
          callbackURL: '/auth/google/callback'
      },
      (accessToken, refreshToken, profile, done) => {        
          User.findOne({ googleId: profile.id }).then(existingUser => {
              if(existingUser){
                done(null, existingUser);
              }else{                
                new User({ googleId: profile.id }).save().then(user => {
                  done(null, user)
                });
              }
          });
      }
    )
  );