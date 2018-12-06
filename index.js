const 
express = require('express'),
mongoose = require('mongoose'),
keys = require('./config/keys'),
cookieSession = require('cookie-session'),
passport = require('passport'),
cors = require('cors');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.dbConnection, { useNewUrlParser: true });

const app = express();
 
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  }

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey,]
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));

require('./routes/authRoutes')(app);

// heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);
