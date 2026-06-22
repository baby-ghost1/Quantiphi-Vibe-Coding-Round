const express = require("express");

const {
  getSubscriptions,
  createSubscription,
  toggleSubscription
} = require("../controllers/subscriptionController");

const router = express.Router();

router.get("/", getSubscriptions);

router.post("/", createSubscription);

router.patch("/:id/toggle", toggleSubscription);

module.exports = router;