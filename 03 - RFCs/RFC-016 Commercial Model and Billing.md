# RFC 016 Commercial Model and Billing

Status:
Draft

Owner:
Chief Product and Design Officer

Reviewers:
CEO, Codex Lead Engineer

## Purpose

Define how a website visitor becomes a paying Harbor Vault customer.

This RFC defines pricing, checkout, subscriptions, renewals, invoices, cancellations, billing settings, and the boundary between Harbor Vault and the payment provider.

## Principle

Buying Harbor Vault should be self-serve and fast.

If someone lands on the website at 2:00 AM, they should be able to become a customer in under five minutes.

No required sales call.

No required demo.

No quote.

No email back-and-forth for standard plans.

## Commercial Flow

```text
Website
  Pricing
    Choose Plan
      Create Account
        Create Organization
          Pay
            Enter Harbor Vault
```

## Payment Provider

Do not build billing infrastructure from scratch.

Use a payment provider such as Stripe for:

- Subscriptions
- Credit cards
- Invoices
- Failed payments
- Taxes
- Receipts
- Payment method updates
- Subscription lifecycle events

Harbor Vault should store only the minimum billing metadata needed to connect an Organization to its payment provider customer and subscription records.

## Plans

### Individual

Pricing:

- $19 first month
- $49/month thereafter

Flow:

1. User clicks Start Your First Month.
2. User creates account.
3. User verifies email.
4. User names Organization.
5. User enters payment information.
6. $19 is charged.
7. Harbor Vault opens.
8. Renewal automatically changes to $49/month.

Includes:

- 1 Organization
- Up to 3 users
- Complete Harbor Vault platform
- Harbor AI

### Team

Pricing:

- $199/month

Flow:

1. User clicks Start Team.
2. User creates account.
3. User verifies email.
4. User names Organization.
5. User enters payment information.
6. $199/month subscription begins.
7. Harbor Vault opens.

Includes:

- 1 Organization
- Up to 100 users
- Complete Harbor Vault platform
- Harbor AI
- Priority Support
- API access when available

### 100+ Users

The call to action is Contact Us, not Subscribe.

Form fields:

- Name
- Organization
- Number of users
- Email
- Message

This path creates a sales lead, not an automatic subscription.

Use for:

- Organizations with more than 100 users
- Dedicated onboarding
- Custom integrations
- Advanced security requirements
- Private deployments
- Future enterprise capabilities

## No Feature Gating

Every paid plan includes the complete Harbor Vault platform.

Plans scale by capacity, support, onboarding, advanced security, and deployment requirements.

Do not remove core functionality from lower tiers.

## Billing Location Inside Harbor Vault

Billing belongs under:

```text
Settings
  Organization
    Members
    Billing
    AI Usage
    Security
```

Billing should show:

- Current Plan
- Next Billing Date
- Payment Method
- Invoice History
- Change Plan
- Cancel Subscription

Nothing more in the Foundation.

## Minimal Signup Fields

Do not ask for twenty fields during signup.

Required fields:

- Name
- Email
- Password or sign in with provider
- Organization Name

Everything else can be completed later.

## Data Model Implications

Core billing fields:

- organizationId
- plan
- subscriptionStatus
- paymentProvider
- paymentProviderCustomerId
- paymentProviderSubscriptionId
- currentPeriodStart
- currentPeriodEnd
- cancelAtPeriodEnd
- trialOrIntroEndsAt
- createdAt
- updatedAt

Potential tables:

- billing_customers
- billing_subscriptions
- billing_invoices
- billing_events
- commercial_leads

## Subscription Statuses

Recommended statuses:

- active
- past_due
- canceled
- incomplete
- trialing if used later
- contact_sales

## Webhooks

Payment provider webhooks should update Harbor Vault billing state.

Important events:

- checkout completed
- subscription created
- subscription updated
- invoice paid
- invoice payment failed
- subscription canceled
- payment method updated

Webhook handling must be idempotent.

## Permissions

Only Owners and authorized Administrators can:

- View billing
- Change plan
- Update payment method
- View invoices
- Cancel subscription

Team Members should not see billing details.

Harbor AI should not reveal billing details to users without billing access.

## Cancellation

Foundation cancellation should be simple:

- User can cancel from Billing.
- Subscription remains active until the end of the paid period.
- Organization access continues until currentPeriodEnd.
- Retention policy should be defined before launch.

Do not make cancellation hostile.

## Failure States

Payment failure should:

- Notify billing contacts.
- Show a clear Billing status.
- Provide a payment update link.
- Avoid immediate destructive lockout.

Exact grace period should be defined before launch.

## Open Questions

- Is the $19 Individual first month implemented as a coupon, introductory price, or first invoice override?
- Which payment provider should be used first?
- Should Team have a setup fee? Current recommendation: no.
- What is the grace period after failed payment?
- How long is customer data retained after cancellation?
- Should API access be included in Team at launch or later?
- Should AI usage have fair-use limits or explicit limits?

## Acceptance Criteria

- A standard customer can subscribe without a sales call.
- Individual and Team purchase flows are defined.
- 100+ Users path creates a contact request instead of checkout.
- Billing is located under Organization Settings.
- Billing screens stay simple.
- Payment provider responsibilities are clearly separated from Harbor Vault responsibilities.
- Required signup fields are limited to name, email, password or provider login, and Organization name.
- Owners and authorized Administrators can manage billing.
- Subscription states and webhook requirements are defined.
