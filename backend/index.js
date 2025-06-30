require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const stripe = require("./routes/stripe");

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/images", express.static("public/images"));
mongoose
  .connect(process.env.MONGO_URL || "mongodb://localhost:27017/ecommerce")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));

app.use("/api/auth", authRoutes);
app.use("/api/products", require("./routes/product"));
app.use("/api/orders", orderRoutes);
app.use("/api/checkout", stripe);

app.listen(5000, () => console.log("Server running on port 5000"));