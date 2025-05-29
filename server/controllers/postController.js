const Post = require('../models/Post');
const multer = require('multer');
const path = require('path');

// Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Hanya gambar dengan format JPG, JPEG, atau PNG yang diperbolehkan'));
    }
  },
});

// Middleware to handle Multer errors
const uploadMiddleware = (req, res, next) => {
  upload.single('image')(req, res, function (err) {
    if (err instanceof multer.MulterError || err) {
      return res.status(400).json({ error: err.message });
    }
    next();
  });
};

const createPost = async (req, res) => {
    try {
        console.log('Creating post with user ID:', req.userId);
        const post = await Post.create({
            title: req.body.title,
            description: req.body.description,
            location: req.body.location,
            date: req.body.date,
            image: req.file ? `/uploads/${req.file.filename}` : null,
            author: req.userId
        });

        // Populate the author details before sending response
        await post.populate('author', 'nama email');
        
        res.status(201).json({
            message: 'Postingan berhasil dibuat',
            post: post
        });
    } catch (err) {
        console.error('Error creating post:', err);
        res.status(400).json({ error: err.message });
    }
};

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()
            .populate('author', 'nama email')
            .sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        console.error('Error fetching posts:', err);
        res.status(500).json({ error: err.message });
    }
};

// Get posts by user ID
const getUserPosts = async (req, res) => {
    try {
        const posts = await Post.find({ author: req.userId })
            .populate('author', 'nama email')
            .sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        console.error('Error fetching user posts:', err);
        res.status(500).json({ error: err.message });
    }
};

// Get a single post by ID
const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
            .populate('author', 'nama email');
        
        if (!post) {
            return res.status(404).json({ error: 'Postingan tidak ditemukan' });
        }
        
        res.json(post);
    } catch (err) {
        console.error('Error fetching post:', err);
        res.status(500).json({ error: 'Gagal mengambil detail postingan' });
    }
};

module.exports = {
    createPost,
    getPosts,
    getUserPosts,
    getPostById,
    uploadMiddleware
};
