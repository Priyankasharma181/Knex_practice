// it is for home page
var express = require("express")
var app = express()
var port = 8000
app.get("/",(req,res)=>{
    res.send("priyanka")
})
app.listen(port,()=>{
    console.log(`listining to the port num  ${port}`);
})


// it will give us in json format
// app.get("/",(req,res)=>{
//     res.json({Name : " is priyanka"})
// })
// app.listen(port,()=>{
//     console.log("listining");
// })



