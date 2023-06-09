require('dotenv').config();

const mongoose = require('mongoose')
try {
    mongoose.connect(process.env.MongooseLink);
    console.log('DB has connected successfully!')
} catch (error) {
    handleError(error);
}
mongoose.connection.on('error', err => {
    logError(err);
});

