require('dotenv').config()
require('./dbconfig/mongoconfig');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const adminLog = require('./routes/admin')
const userLog = require('./routes/user')
const product = require('./routes/products')
app.use('/admin', adminLog);
app.use('/user', userLog);
app.use('/product', product);


app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log('Error ', err);
    }
    console.log('Node.js is running at PORT', process.env.PORT)
})

