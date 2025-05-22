const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/blog-api')
  .then(() => console.log('Connected to MongoDB'));

app.use('/users', require('./routes/users'));
app.use('/posts', require('./routes/posts'));
app.use('/comments', require('./routes/comments'));

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});