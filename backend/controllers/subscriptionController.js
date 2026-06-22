const {
  calculateMonthlyBurnRate,
  getRenewingSoonCount,
  attachRenewingSoon
} = require("../utils/subscriptionUtils");

let subscriptions = [];

const getSubscriptions = (req, res) => {
  const enriched = attachRenewingSoon(subscriptions);

  res.json({
    subscriptions: enriched,
    monthlyBurnRate:
      calculateMonthlyBurnRate(subscriptions),
    upcomingRenewals:
      getRenewingSoonCount(subscriptions)
  });
};

const createSubscription = (req, res) => {
  const {
    serviceName,
    cost,
    billingCycle,
    renewalDate
  } = req.body;

  if (
    !serviceName ||
    !cost ||
    !billingCycle ||
    !renewalDate
  ) {
    return res.status(400).json({
      message: "All fields required"
    });
  }

  const subscription = {
    id: Date.now().toString(),
    serviceName,
    cost: Number(cost),
    billingCycle,
    renewalDate,
    active: true
  };

  subscriptions.push(subscription);

  res.status(201).json(subscription);
};

const toggleSubscription = (req, res) => {
  const { id } = req.params;

  const sub = subscriptions.find(
    (item) => item.id === id
  );

  if (!sub) {
    return res
      .status(404)
      .json({ message: "Not found" });
  }

  sub.active = !sub.active;

  res.json(sub);
};

module.exports = {
  getSubscriptions,
  createSubscription,
  toggleSubscription
};