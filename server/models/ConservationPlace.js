const mongoose = require('mongoose');

const conservationPlaceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    coordinates: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    image: { type: String, default: '/images/default-conservation.jpg' }, // Default image path
    status: {
        type: String,
        enum: ['Aktif', 'Dalam Pemeliharaan', 'Ditutup'],
        default: 'Aktif'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('ConservationPlace', conservationPlaceSchema); 