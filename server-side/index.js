let express=require('express');
let mysql=require('mysql');
let cors=require('cors');
// const { log } = require('console');
const app=express();
app.use(express.json());
app.use(cors());

var connection=mysql.createConnection({
    host:'YOUR_HOST',
    port:'3306',
    user:'USER_NAME',
    password:'PASSWORD',
    database:'DATABASE_NAME'
});

connection.connect();


app.post('/insert', (req, res) => {
    const sql = 'INSERT INTO details (first_name, last_name, email, phone_number, message) VALUES (?, ?, ?, ?, ?)';
    let { first_name, last_name ,email, phone_number, message } = req.body;
    connection.query(sql,[first_name ,last_name, email, phone_number, message] ,function (error, results) {
        if (error) {
            console.log('error ', error);
        } else {
            console.log('result is ', JSON.stringify(results));
        }
        res.send(JSON.stringify(results));  
        // connection.end();    
    });
});

app.listen(3000, ()=>{
    console.log('server is running ');
});