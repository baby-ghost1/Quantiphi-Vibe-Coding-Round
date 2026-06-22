function calculateMonthlyBurnRate(subscriptions) {
  const total = subscriptions
    .filter((sub) => sub.active)
    .reduce((sum, sub) => {
      return (
        sum +
        (sub.billingCycle === "Monthly"
          ? Number(sub.cost)
          : Number(sub.cost) / 12)
      );
    }, 0);

  return Number(total.toFixed(2));
}

function getRenewingSoonCount(subscriptions) {
  const today = new Date();

  return subscriptions.filter((sub) => {
    const renewalDate = new Date(sub.renewalDate);

    const diff =
      (renewalDate.getTime() - today.getTime()) /
      (1000 * 60 * 60 * 24);

    return diff >= 0 && diff <= 7;
  }).length;
}

function attachRenewingSoon(subscriptions) {
  const today = new Date();

  return subscriptions.map((sub) => {
    const renewalDate = new Date(sub.renewalDate);

    const diff =
      (renewalDate.getTime() - today.getTime()) /
      (1000 * 60 * 60 * 24);

    return {
      ...sub,
      renewingSoon: diff >= 0 && diff <= 7
    };
  });
}

module.exports = {
  calculateMonthlyBurnRate,
  getRenewingSoonCount,
  attachRenewingSoon
};