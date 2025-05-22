const { text } = require('express');
const mongoose = require('mongoose');

const commentSchema = new mongoose.schema({
    text: String,
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Comment', commentSchema);