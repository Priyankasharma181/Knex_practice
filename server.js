const express = require("express")
const app = express()
const data = require('./data')
app.get('/',(req,res)=>{
    // res.json({message:"api is working"})
    res.json(data)
})
app.post('/data',(req,res)=>{
    res.send(data)
})


app.listen(3000,()=>{
    console.log("listining");
})