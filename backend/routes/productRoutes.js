// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const {
    getAllProducts,
    addProduct,
    getProductById,
    updateProduct,
    deleteProduct,
} = require("../controllers/productControllers");

// Routes
router.get("/getProducts", getAllProducts); // Get all products
router.post("/addProduct", addProduct); // Add a new product
router.get("/getProduct/:id", getProductById); // Get product by ID
router.put("/updateProduct/:id", updateProduct); // Update product
router.delete("/deleteProduct/:id", deleteProduct); // Delete product

module.exports = router;
