const express = require('express');
const router = express.Router();
const Community = require('../models/Community');
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

// Middleware untuk menangani error dari multer
const uploadMiddleware = (req, res, next) => {
  upload.single('foto')(req, res, function (err) {
    if (err instanceof multer.MulterError || err) {
      return res.status(400).json({ error: err.message });
    }
    next();
  });
};

// Endpoint POST untuk membuat komunitas
router.post('/', uploadMiddleware, async (req, res) => {
  try {
    const { nama, deskripsi } = req.body;
    const foto = req.file ? `/uploads/${req.file.filename}` : null;

    // Validate input
    if (!nama || !deskripsi) {
      return res.status(400).json({ error: 'Nama dan deskripsi komunitas diperlukan' });
    }

    const newCommunity = new Community({
      nama,
      deskripsi,
      foto,
    });

    await newCommunity.save();

    res.status(201).json({
      message: 'Komunitas berhasil dibuat',
      community: newCommunity,
    });
  } catch (error) {
    console.error('Error creating community:', error.message);
    res.status(500).json({ error: 'Gagal membuat komunitas' });
  }
});

// Endpoint GET untuk mengambil semua komunitas
router.get('/', async (req, res) => {
  try {
    const communities = await Community.find().sort({ createdAt: -1 });
    res.status(200).json(communities);
  } catch (error) {
    console.error('Error fetching communities:', error.message);
    res.status(500).json({ error: 'Gagal mengambil komunitas' });
  }
});

// Endpoint GET untuk mengambil detail komunitas berdasarkan ID
router.get('/:id', async (req, res) => {
  try {
    const community = await Community.findById(req.params.id);
    if (!community) {
      return res.status(404).json({ error: 'Komunitas tidak ditemukan' });
    }
    res.status(200).json(community);
  } catch (error) {
    console.error('Error fetching community:', error.message);
    res.status(500).json({ error: 'Gagal mengambil komunitas' });
  }
});

module.exports = router;