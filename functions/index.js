const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe");


//App config
const app = express();

// Middleware's
app.use(cors({ origin: true }));
app.use(express.json());

//API
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("amount of something ....", total);
  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// app listeners
exports.api = functions.https.onRequest(app);
