const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const { post } = require('./users');

router.post('/', async (req, res) => {
    const post = await Post.create(req.body);
    res.json(post);
});

router.get('/', async (req, res) => {
    const posts = await Post.find().populate('user');
    res.json(post);
});

module.exports = router;