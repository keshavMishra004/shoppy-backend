const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/db');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const authRoutes = require('./routes/authroutes.js');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api', authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${5000}`);
});
