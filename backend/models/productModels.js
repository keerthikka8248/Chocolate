// models/productModel.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }, // Store image URLs
    category: { type: String, required: true }, // E.g., "Chocolate"
    stock: { type: Number, default: 0 },
    ratings: { type: Number, default: 0 },
    isSpecial: { type: Boolean, default: false }, 
});

module.exports = mongoose.model("Product", productSchema);
