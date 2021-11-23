const Mysql = require("mysql")
var con = Mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Pink@123",
})
con.connect(function (err) {
    if (err) throw err;
    console.log("connected");
    sql = "create database subjectdb"
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("created");
    })
})
