const Stripe = require("stripe");

const priceIdsByPlan = {
  individual: process.env.STRIPE_INDIVIDUAL_PRICE_ID,
  team: process.env.STRIPE_TEAM_PRICE_ID,
};

const planNames = {
  individual: "Individual",
  team: "Team",
};

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed" });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return jsonResponse(500, { error: "Stripe secret key is not configured" });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  let payload;

  try {
    payload = JSON.parse(event.body || "{}");
  } catch (error) {
    return jsonResponse(400, { error: "Invalid request body" });
  }

  const plan = String(payload.plan || "").toLowerCase();
  const priceId = priceIdsByPlan[plan];

  if (!priceId) {
    return jsonResponse(400, { error: "Unknown or unconfigured plan" });
  }

  if (!String(priceId).startsWith("price_")) {
    return jsonResponse(500, {
      error: `${planNames[plan]} is configured with an invalid Stripe Price ID. Use a value that starts with price_.`,
    });
  }

  const siteUrl =
    process.env.SITE_URL ||
    process.env.URL ||
    process.env.DEPLOY_PRIME_URL ||
    "https://cottonwoodharbor.com";

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      success_url: `${siteUrl}/products.html?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/products.html?checkout=cancelled`,
      metadata: {
        plan,
        planName: planNames[plan],
      },
      subscription_data: {
        metadata: {
          plan,
          planName: planNames[plan],
        },
      },
    });

    return jsonResponse(200, { url: session.url });
  } catch (error) {
    console.error("Stripe checkout session failed", error);
    return jsonResponse(500, {
      error: error.message || "Unable to create checkout session",
    });
  }
};
