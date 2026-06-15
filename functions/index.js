const functions = require("firebase-functions/v1");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51Tg9FWPQdVetGrxTu49WhekPu6U5M5VHXJqCP5ZPKakiCwe6jtnZAGzQftN0cPuyIroqeEqumTHxg56RzQin0eF900WxwJTQir");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.post("/payments/create", async (req, res) => {
  const total = Math.round(req.query.total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});

exports.api = functions.https.onRequest(app);