const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const Product = require("../models/productModels");
// Generate JWT
const generateToken = (user) => {
    return jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Register a new user
exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: "User already exists" });

        const user = new User({ name, email, password });
        await user.save();

        const token = generateToken(user);
        res.status(201).json({ user, token });
    } catch (err) {
        console.error("Error registering user:", err.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Login user
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const token = generateToken(user);
        res.status(200).json({ user, token });
    } catch (err) {
        console.error("Error logging in:", err.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get user details (protected route)
exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.status(200).json(user);
    } catch (err) {
        console.error("Error fetching user profile:", err.message);
        res.status(500).json({ error: "Error fetching user profile" });
    }
};

// Updating user profile
exports.updateUserProfile = async (req, res) => {
    const { name, email, phoneNumber, address } = req.body;

    try {
        // Find user by ID (from the JWT token)
        const user = await User.findById(req.user._id);  // Assuming req.user is set by the protect middleware

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Update user fields
        user.name = name || user.name;
        user.email = email || user.email;
        user.phoneNumber = phoneNumber || user.phoneNumber;
        user.address = address || user.address;

        // Save updated user
        await user.save();

        res.status(200).json({
            message: "User profile updated successfully",
            user: {
                name: user.name,
                email: user.email,
                phoneNumber: user.phoneNumber,
                address: user.address,
            }
        });

    } catch (err) {
        console.error("Error updating user profile:", err.message);
        res.status(500).json({ error: "Error updating user profile" });
    }
};

exports.addToWishlist = async (req, res) => {
    try {
        const userId = req.user._id;
        const {productId} = req.params;

        const user = await User.findById(userId);
        if(!user) return res.status(404).json({message : 'User not found'});

        if(user.wishlist.includes(productId)){
            return res.status(400).json({message : 'Product already in wishlist'});
        }

        user.wishlist.push(productId);
        await user.save();

        res.status(200).json({message : 'Product added to wishlist', wishlist: user.wishlist});
    }
    catch(error){
        res.status(500).json({message : 'Server Error', error: error.message });
    }
};

exports.getWishlist = async (req,res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId).populate('wishlist', 'name price image');

        if(!user) 
            return res.status(404).json({message : 'User not found'});

        res.status(200).json({wishlist : user.wishlist});
    }
    catch(error){
        res.status(500).json({message : 'Server Error', error: error.message});
    }
};

exports.removeFromWishlist = async(req,res) => {
    try{
        const userId = req.user._id;
        const {productId} = req.params;

        const user = await User.findById(userId);
        if(!user)
            return res.status(404).json({message: 'User not found'});

        user.wishlist = user.wishlist.filter((id)=>id.toString()!==productId);
        await user.save();

        res.status(200).json({message: 'Product removed from wishlist', wishlist: user.wishlist});
    }
    catch(error){
        res.status(500).json({message: 'Server Error', error: error.message});
    }
};

exports.addToCart = async (req,res)=> {
    try{
        const userId = req.user._id;
        const {productId,quantity} = req.body;

        const user = await User.findById(userId);
        if(!user)
            return res.status(404).json({message: 'User not found'});

        const existngItem = user.cart.find((item) => item.product.toString()===productId);

        if(existngItem){
            existngItem.quantity += quantity;
        }
        else{
            user.cart.push({product: productId, quantity});
        }

        await user.save();
        res.status(200).json({message: 'Product added to cart', cart: user.cart});

    }
    catch(error){
        res.status(500).json({message : 'Server Error', error: error.message});
    }
};

exports.getCart = async (req,res)=>{
    try {
        const userId = req.user._id;
        const user = await User.findById(userId).populate('cart.product', 'name price image');

        if(!user)
            return res.status(404).json({message: 'User not found'});

        res.status(200).json({cart : user.cart});
    }
    catch(error){
        
        res.status(500).json({message: 'Server error',error: error.message});
    }
};

exports.removeFromCart = async(req,res) => {
    try {
        const userId = req.user._id;
        const {productId} = req.params;

        const user = await User.findById(userId);
        if(!user)
            return res.status(404).json({message: 'User not found'});

        user.cart = user.cart.filter((item)=> item.product.toString() !== productId);
        await user.save();

        res.status(200).json({message: 'Product removed from cart', cart: user.cart});

    }
    catch(error){
        res.status(500).json({message: 'Server Error', error: error.message});
    }
};

