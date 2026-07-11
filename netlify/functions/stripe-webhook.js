const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_missing");

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
}

function getRawBody(event) {
  if (event.isBase64Encoded) {
    return Buffer.from(event.body || "", "base64");
  }

  return event.body || "";
}

function logCheckoutCompleted(session) {
  console.log("checkout.session.completed", {
    sessionId: session.id,
    customerId: session.customer,
    subscriptionId: session.subscription,
    customerEmail: session.customer_details && session.customer_details.email,
    plan: session.metadata && session.metadata.plan,
    amountTotal: session.amount_total,
    currency: session.currency,
    paymentStatus: session.payment_status,
  });
}

function logSubscription(subscription, eventType) {
  console.log(eventType, {
    subscriptionId: subscription.id,
    customerId: subscription.customer,
    status: subscription.status,
    currentPeriodStart: subscription.current_period_start,
    currentPeriodEnd: subscription.current_period_end,
    cancelAtPeriodEnd: subscription.cancel_at_period_end,
    plan: subscription.metadata && subscription.metadata.plan,
  });
}

function logInvoice(invoice, eventType) {
  console.log(eventType, {
    invoiceId: invoice.id,
    customerId: invoice.customer,
    subscriptionId: invoice.subscription,
    status: invoice.status,
    amountPaid: invoice.amount_paid,
    amountDue: invoice.amount_due,
    currency: invoice.currency,
    hostedInvoiceUrl: invoice.hosted_invoice_url,
  });
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed" });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return jsonResponse(500, { error: "Stripe secret key is not configured" });
  }

  const signature = event.headers["stripe-signature"] || event.headers["Stripe-Signature"];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const rawBody = getRawBody(event);

  let stripeEvent;

  try {
    if (webhookSecret) {
      stripeEvent = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
    } else {
      stripeEvent = JSON.parse(event.body || "{}");
      console.warn("STRIPE_WEBHOOK_SECRET is not configured. Parsed webhook without signature verification.");
    }
  } catch (error) {
    console.error("Stripe webhook verification failed", error.message);
    return jsonResponse(400, { error: `Webhook error: ${error.message}` });
  }

  try {
    switch (stripeEvent.type) {
      case "checkout.session.completed":
        logCheckoutCompleted(stripeEvent.data.object);
        break;

      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted":
        logSubscription(stripeEvent.data.object, stripeEvent.type);
        break;

      case "invoice.paid":
      case "invoice.payment_failed":
        logInvoice(stripeEvent.data.object, stripeEvent.type);
        break;

      default:
        console.log("Unhandled Stripe webhook event", { type: stripeEvent.type });
    }

    return jsonResponse(200, { received: true });
  } catch (error) {
    console.error("Stripe webhook handler failed", error);
    return jsonResponse(500, { error: "Webhook handler failed" });
  }
};
