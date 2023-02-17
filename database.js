var mysql = require('mysql2');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password:"Anbu***24",  
database: "anbu"  
});  
con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  
var sql = "CREATE TABLE user (name VARCHAR(50),emailid VARCHAR(50),phone BIGINT(10), age INT(3), dateofbirth DATE)";  
var sql = "INSERT INTO user (name,emailid,phone,age,dateofbirth) values('tamil','tamil234@gmail.com',9876567840,21,'2001/03/03'),('jithin','jithin245@gmail.com',9586767676,37,'1985/04/05')";
con.query(sql, function (err, result) {   
if (err) throw err;  
console.log("Table Created");  
}
);
});