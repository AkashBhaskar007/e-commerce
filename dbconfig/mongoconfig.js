const mongoose = require('mongoose')
try {
    mongoose.connect("mongodb://localhost:27017/ecommerce");
    console.log('DB has connected successfully!')
} catch (error) {
    handleError(error);
}
mongoose.connection.on('error', err => {
    logError(err);
});
