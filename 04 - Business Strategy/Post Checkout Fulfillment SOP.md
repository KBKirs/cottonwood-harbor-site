# Post Checkout Fulfillment SOP

Status: Active
Owner: Founder and CEO
Last updated: July 11, 2026

## Purpose

This SOP defines how Cottonwood Harbor handles a paid Harbor Vault subscriber after Stripe checkout succeeds and before automated account provisioning exists.

The goal is simple: every paid customer should receive a clear human follow-up, have their subscription recorded, and know what happens next.

## When This SOP Applies

Use this process when:

- A customer completes Stripe Checkout.
- Stripe creates or updates a subscription.
- Netlify receives a Stripe webhook event.
- Harbor Vault account creation is not yet automated.

## Primary Trigger

The normal trigger is a Stripe event such as:

- `checkout.session.completed`
- `customer.subscription.created`
- `customer.subscription.updated`
- `invoice.paid`

These events should appear in Stripe and in the Netlify `stripe-webhook` function logs.

## Immediate Owner Action

When a new subscription appears:

1. Open Stripe Dashboard.
2. Go to Customers.
3. Open the newest customer.
4. Confirm the customer email.
5. Confirm the selected plan.
6. Confirm the subscription status is active or trialing.
7. Confirm the first invoice was paid.
8. Add the customer to the temporary subscriber tracker.
9. Send the welcome email from `admin@cottonwoodharbor.com`.
10. Set a next action for onboarding or follow-up.

## Temporary Subscriber Tracker

Until Harbor Vault stores customers automatically, maintain a simple tracker with these fields:

- Customer name
- Email
- Organization name
- Plan
- Stripe customer ID
- Stripe subscription ID
- Checkout date
- Subscription status
- Onboarding status
- Notes
- Next action

Recommended onboarding statuses:

- New subscription
- Welcome email sent
- Waiting on customer
- Setup in progress
- Active
- Cancelled

## Welcome Email Template

Subject: Welcome to Harbor Vault

```text
Hi [Name],

Thank you for subscribing to Harbor Vault.

We received your subscription and are preparing your account setup. To make sure we configure everything correctly, please reply with:

- Organization name
- Best contact email
- People who should have access
- Any immediate workflows or documents you want help organizing first

We will follow up with next steps shortly.

Kimberly
Cottonwood Harbor
admin@cottonwoodharbor.com
```

## Failed Payment Handling

If Stripe shows a failed payment or `invoice.payment_failed` event:

1. Confirm the customer and subscription in Stripe.
2. Do not manually collect or store card information.
3. Use Stripe's built-in billing and payment recovery tools.
4. Send a short email asking the customer to update their payment method through Stripe if needed.
5. Mark the tracker status as `Payment issue`.

## Cancellation Handling

If a customer cancels:

1. Confirm the cancellation in Stripe.
2. Update the tracker status to `Cancelled`.
3. Record the cancellation date.
4. If appropriate, send a short confirmation email.
5. Do not delete customer history unless required by policy or law.

## What Not To Do

- Do not promise instant Harbor Vault access until account creation exists.
- Do not store credit card numbers, CVCs, or payment details.
- Do not ask customers to email payment information.
- Do not manually change Stripe billing unless the reason is clear.
- Do not let a paid customer sit without a follow-up.

## Future Automation

This manual process should eventually be replaced by automated provisioning:

- Stripe webhook creates or updates the customer record.
- Harbor Vault creates the Organization.
- Harbor Vault creates the initial Owner account.
- Welcome and onboarding emails are sent automatically.
- Subscription status is stored in the Harbor Vault database.
- Billing is managed through the Stripe customer portal.

## Definition Of Done

A paid subscriber is handled when:

- Payment is confirmed in Stripe.
- Customer is entered in the tracker.
- Welcome email is sent.
- Onboarding status is updated.
- Next action is clear.

