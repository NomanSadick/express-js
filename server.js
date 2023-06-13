const express = require ( 'express' );

app = express();

app.get('/', function (req, res) {
    res.send('Welcome to the express')
})

app.post('/home', function (req, res) {
    res.send('Welcome to the express home page')
})

app.put('/about', function (req, res) {
    res.send('Welcome to the express about page')
})

app.delete('/contract', function (req, res) {
    res.send('Welcome to the express contract page')
})


app.listen(8000, function () {
    console.log('listening on http://localhost on port 8000');
})