var express = require('express')
var app = express()
 
app.get('/index.json', function (req, res) {
    res.send(process.env)
});

app.get('/', function (req, res) {
    res.send("Hey there!")
});
 
console.log(process.env);
console.log("simple: running at port 3000");
app.listen(3000)
