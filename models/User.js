const mongoose = require('mongoose');

const userSchema = new mongoose.userSchema({
    name: String,
    email: String
})

module.exports = mongoose.model('User',userSchema);