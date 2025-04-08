const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const postRoutes = require('./routes/postRoutes');

// Load .env
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/posts', postRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB Connected');
  app.listen(process.env.PORT, () => {
    console.log(`🚀 Server berjalan di http://localhost:${process.env.PORT}`);
  });
})
.catch((err) => {
  console.error('❌ Gagal konek MongoDB:', err.message);
});
