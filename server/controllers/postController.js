const Post = require('../models/Post');

const createPost = async (req, res) => {
    try {
      console.log('DATA DITERIMA FRONTEND:', req.body); // Tambahkan ini
      const post = await Post.create(req.body);
      res.status(201).json(post);
    } catch (err) {
      console.error('GAGAL CREATE POST:', err); // Tambahkan ini
      res.status(400).json({ error: err.message });
    }
  };
  

const getPosts = async (req, res) => {
  const posts = await Post.find().sort({ date: -1 });
  res.status(200).json(posts);
};

module.exports = { createPost, getPosts };
