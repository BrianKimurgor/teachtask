var express = require("express");
var path = require('path')


var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});


app.use(express.static(path.join(__dirname, 'src')))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'))
   });

   app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'))
   });
