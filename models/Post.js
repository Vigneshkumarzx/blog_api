const mongoose = require('mongoose');

const postSchema = new mongoose.schema({
    title: String,
    content: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Post', postSchema)