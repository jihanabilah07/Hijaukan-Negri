const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
    date: Date,
    image: String,
});

module.exports = mongoose.model('Post', postSchema);
