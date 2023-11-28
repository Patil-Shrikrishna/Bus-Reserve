const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const handleMakePayment = async (req, res) => {
  const bookingData = req.body.booking;

  const lineItems = [
    {
      price_data: {
        currency: "inr",
        product_data: {
          name: bookingData.bookingDetails.busName,
        },
        unit_amount: bookingData.bookingDetails.busFare * 100,
      },
      quantity: bookingData.bookingDetails.selectedSeats.length,
    },
  ];

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: `http://localhost:5173/receipt`,
    cancel_url: "http://localhost:5173/passengerInfo",
  });

  res.json({ id: session.id, bookingData });
};
module.exports = handleMakePayment;
