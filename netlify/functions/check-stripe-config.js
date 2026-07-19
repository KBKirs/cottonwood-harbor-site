const Stripe = require("stripe");

function cleanEnvValue(value) {
  return String(value || "")
    .trim()
    .replace(/^['"]+|['"]+$/g, "")
    .replace(/[^\w-]/g, "");
}

function maskValue(value) {
  const cleaned = cleanEnvValue(value);

  if (!cleaned) return "";
  if (cleaned.length <= 6) return cleaned;

  return `${cleaned.slice(0, 4)}...${cleaned.slice(-4)}`;
}

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
    body: JSON.stringify(body, null, 2),
  };
}

exports.handler = async () => {
  const secretKey = cleanEnvValue(process.env.STRIPE_SECRET_KEY);
  const couponId = cleanEnvValue(process.env.STRIPE_INDIVIDUAL_FIRST_MONTH_COUPON_ID);
  const individualPriceId = cleanEnvValue(process.env.STRIPE_INDIVIDUAL_PRICE_ID);
  const teamPriceId = cleanEnvValue(process.env.STRIPE_TEAM_PRICE_ID);

  const result = {
    stripeSecretKeyMode: secretKey.startsWith("sk_live_")
      ? "live"
      : secretKey.startsWith("sk_test_")
        ? "test"
        : "unknown",
    individualCouponId: couponId,
    individualPriceId: maskValue(individualPriceId),
    teamPriceId: maskValue(teamPriceId),
    couponFound: false,
    couponValid: null,
    couponName: null,
    couponError: null,
  };

  if (!secretKey) {
    return jsonResponse(500, {
      ...result,
      couponError: "STRIPE_SECRET_KEY is not configured.",
    });
  }

  if (!couponId) {
    return jsonResponse(500, {
      ...result,
      couponError: "STRIPE_INDIVIDUAL_FIRST_MONTH_COUPON_ID is not configured.",
    });
  }

  try {
    const stripe = new Stripe(secretKey);
    const coupon = await stripe.coupons.retrieve(couponId);

    return jsonResponse(200, {
      ...result,
      couponFound: true,
      couponValid: coupon.valid,
      couponName: coupon.name,
    });
  } catch (error) {
    return jsonResponse(500, {
      ...result,
      couponError: error.message || "Unable to retrieve coupon.",
    });
  }
};
