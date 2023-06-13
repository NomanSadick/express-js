const express = require ( 'express' );

app = express();
// status code manupulation
app.get('/one', function (req, res) {
    res.status(401);
    res.end("Unauthorized");
});

// json array
app.get('/two', function (req, res) {
    let jsonArray = [
        { name: ' department ',
          description: 'My department'
        },
        { name: ' department1 ',
          description: 'My department1'
        }
    ];
    res.json(jsonArray);
});

// Response Download
app.get("/five",function (req,res) {
    res.download("./uploads/abc.jpg");
})



// Response Redirect
app.get("/Bangladesh",function (req,res) {
    res.redirect("http://localhost:8000/India")
})


app.get("/India",function (req,res) {
    res.send("This is india");
})

// response headers
app.get("/Six",function (req,res) {
    res.append("name","johan");
    res.append("city","Dhaka");
    res.append("age","30 Years Old");
    res.status(201).end("Hello World");
})







app.listen(8000, function () {
    console.log('listening on http://localhost on port 8000');
})