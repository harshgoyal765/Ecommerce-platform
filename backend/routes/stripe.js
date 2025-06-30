const router = require("express").Router();
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 


router.post("/create-checkout-session", async (req, res) => {
  const lineItems = req.body.items.map(item => ({
    price_data: {
      currency: "usd",
      product_data: { name: item.title },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: `${req.headers.origin}/success`,
    cancel_url: `${req.headers.origin}/cancel`,
  });

  res.json({ id: session.id });
});

module.exports = router;