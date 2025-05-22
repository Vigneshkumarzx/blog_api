const express = require('express');
const router = express.Router();
const user = require('..models/User');

router.post('/', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
})

module.exports = router;