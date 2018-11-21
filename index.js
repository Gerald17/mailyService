const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there buddy'});
});

// heroku
const PORT = process.env.PORT || 5000;
console.log('fucking port', PORT);
app.listen(PORT);
