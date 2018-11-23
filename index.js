const 
express = require('express'),
mongoose = require('mongoose');

require('./services/passport');

const app = express();
require('./routes/authRoutes')(app);

// heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);
