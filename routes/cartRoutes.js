const express = require('express');
const { addToCart, updateCartItem, deleteCartItem } = require('../Controllers/cartController');
const auth = require('../Middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, addToCart);
router.put('/:id', auth, updateCartItem);
router.delete('/:id', auth, deleteCartItem);

module.exports = router;
