const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('dotenv').config()
require('./dbconfig/mongoconfig');

const adminLog = require('./routes/admin')
const userLog = require('./routes/user')

app.use('/admin', adminLog);
app.use('/user', userLog);


app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log('Error ', err);
    }
    console.log('Node.js is running at PORT', process.env.PORT)
})

