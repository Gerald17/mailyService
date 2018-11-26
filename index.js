const 
express = require('express'),
mongoose = require('mongoose'),
keys = require('./config/keys'),
cookieSession = require('cookie-session'),
passport = require('passport');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.dbConnection, { useNewUrlParser: true });

const app = express();

app.use(
    cookieSession({
        maxAge: 30*24*60*60*100,
        keys: [keys.cookieKey,]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

// heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);
