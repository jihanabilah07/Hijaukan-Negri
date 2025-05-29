require('dotenv').config();
const mongoose = require('mongoose');
const ConservationPlace = require('../models/ConservationPlace');

const conservationPlaces = [
    {
        name: "Hutan Mangrove Ujong Pancu",
        location: "Desa Ujong Pancu, Kecamatan Peukan Bada, Aceh Besar",
        coordinates: {
            latitude: 5.5214,
            longitude: 95.3173
        },
        image: '/images/conservation/mangrove-ujong-pancu.jpg',
        status: "Aktif"
    },
    {
        name: "Hutan Konservasi Seulawah",
        location: "Kaki Gunung Seulawah, Aceh Besar",
        coordinates: {
            latitude: 5.4481,
            longitude: 95.7275
        },
        image: '/images/conservation/hutan-seulawah.jpg',
        status: "Aktif"
    },
    {
        name: "Taman Hutan Raya Pocut Meurah Intan",
        location: "Saree, Aceh Besar",
        coordinates: {
            latitude: 5.3969,
            longitude: 95.7106
        },
        image: '/images/conservation/tahura-pocut.jpg',
        status: "Dalam Pemeliharaan"
    },
    {
        name: "Kawasan Konservasi Mangrove Kuala Langsa",
        location: "Kuala Langsa, Kota Langsa",
        coordinates: {
            latitude: 4.4833,
            longitude: 97.9167
        },
        image: '/images/conservation/mangrove-kuala-langsa.jpg',
        status: "Aktif"
    },
    {
        name: "Hutan Pinus Rekreasi Paya Tumpi",
        location: "Takengon, Aceh Tengah",
        coordinates: {
            latitude: 4.6333,
            longitude: 96.8333
        },
        image: '/images/conservation/pinus-paya-tumpi.jpg',
        status: "Dalam Pemeliharaan"
    }
];

async function seedDatabase() {
    try {
        // Connect to MongoDB
        console.log('Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/tree-planting-volunteer');
        console.log('Connected to MongoDB successfully');

        // Clear existing conservation places
        console.log('Clearing existing conservation places...');
        await ConservationPlace.deleteMany({});
        console.log('Existing conservation places cleared');

        // Insert new conservation places
        console.log('Creating conservation places...');
        const result = await ConservationPlace.insertMany(conservationPlaces);
        console.log(`Successfully created ${result.length} conservation places`);

        // Close connection
        await mongoose.connection.close();
        console.log('Database connection closed');
        
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}

// Run the seeder
seedDatabase(); 