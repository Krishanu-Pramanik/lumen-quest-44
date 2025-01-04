const mongoose = require('mongoose');

// Define the Product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  stockLevel: {
    type: Number,
    required: true,
    min: 0,
  },
  reorderPoint: {
    type: Number,
    required: true,
    min: 0,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User collection
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the Product model
module.exports = mongoose.model('Product', productSchema);
