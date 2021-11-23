var express = require('express');
var app = express();

app.get('/hello', function(req, res){
   res.send("Hello World!");
});

app.post('/post', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

app.listen(8000,(req,res)=>{
    console.log("listing to the port");
});
