const express = require ( 'express' );

app = express();

app.get('/one', function (req, res) {
    res.status(401);
    res.end("Unauthorized");
})




app.listen(8000, function () {
    console.log('listening on http://localhost on port 8000');
})