const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect("mongodb://localhost:27017/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log("✅ MongoDB connected");

  // OPTIONAL: Clear existing products
  await Product.deleteMany({});
  console.log("🗑️ Old products removed");

  // Insert new products
  const inserted = await Product.insertMany([
    {
      title: "Red Hoodie",
      price: 999,
      description: "Warm and cozy hoodie",
      category: "clothing",
      image: "http://localhost:5000/images/1.jpg",
    },
    {
      title: "Bluetooth Headphones",
      price: 1999,
      description: "Wireless on-ear headphones",
      category: "electronics",
      image: "http://localhost:5000/images/2.jpg",
    },
    {
      title: "Leather Wallet",
      price: 699,
      description: "Genuine leather wallet for men",
      category: "accessories",
      image: "http://localhost:5000/images/3.jpg",
    },
    {
    title: "Sneakers",
    price: 1499,
    description: "Stylish and comfortable sneakers",
    category: "clothing",
    image: "http://localhost:5000/images/4.jpg",
  },
  {
    title: "Smart Watch",
    price: 2999,
    description: "Touchscreen smart watch with fitness tracking",
    category: "electronics",
    image: "http://localhost:5000/images/5.jpg",
  },
  {
    title: "Sunglasses",
    price: 599,
    description: "UV-protected stylish sunglasses",
    category: "accessories",
    image: "http://localhost:5000/images/6.jpg",
  },
  {
    title: "Denim Jeans",
    price: 1299,
    description: "Slim fit stretchable jeans",
    category: "clothing",
    image: "http://localhost:5000/images/7.jpg",
  },
  {
    title: "Wireless Mouse",
    price: 499,
    description: "Ergonomic USB wireless mouse",
    category: "electronics",
    image: "http://localhost:5000/images/8.jpg",
  },
  {
    title: "Leather Belt",
    price: 349,
    description: "Brown formal leather belt",
    category: "accessories",
    image: "http://localhost:5000/images/9.jpg",
  },
  {
    title: "Printed T-Shirt",
    price: 599,
    description: "100% cotton printed t-shirt",
    category: "clothing",
    image: "http://localhost:5000/images/10.jpg",
  },
  {
    title: "Power Bank",
    price: 1099,
    description: "10000mAh fast-charging power bank",
    category: "electronics",
    image: "http://localhost:5000/images/11.jpg",
  },
  {
    title: "Cap",
    price: 299,
    description: "Adjustable cotton baseball cap",
    category: "accessories",
    image: "http://localhost:5000/images/12.jpg",
  }
  ]);

  console.log("✅ Products inserted:", inserted);
  mongoose.disconnect();
}).catch((err) => {
  console.error("❌ Error:", err);
  mongoose.disconnect();
});
