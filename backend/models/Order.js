const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
    },
  ],
  amount: Number,
  address: Object,
  status: { type: String, default: "pending" },
}, { timestamps: true });

module.exports = mongoose.model("Order", OrderSchema);
