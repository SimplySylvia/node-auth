const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/r6Auth');


module.exports = {
    User : require('./user'),
}