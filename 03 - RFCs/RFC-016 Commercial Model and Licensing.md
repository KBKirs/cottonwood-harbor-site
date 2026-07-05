# RFC 016 Commercial Model and Licensing

Status:
Planned

Owner:
Chief Product and Design Officer

Reviewers:
CEO, Codex Lead Engineer

## Purpose

Define the commercial model Harbor Vault uses for pricing, billing, subscriptions, capacity, usage, entitlements, upgrades, and account lifecycle behavior.

This RFC should become the implementation contract for the commercial side of Harbor Vault.

## Current Packaging Direction

Harbor Vault is priced per Organization, not per seat.

Initial plans:

- Individual
- Team
- 100+ Users / Contact Us

Every paid plan includes the complete Harbor Vault platform.

Plans should scale by capacity, support, onboarding, advanced security, and deployment needs rather than by removing core product functionality.

## Topics To Define

- Pricing
- Billing cadence
- Introductory offers
- Trials
- Subscriptions
- Plan entitlements
- AI usage policies
- Storage limits
- User limits
- Upgrade paths
- Downgrade behavior
- Cancellation behavior
- Data retention after cancellation
- Payment failure handling
- Tax and invoice requirements
- Enterprise contracts

## Open Questions

- Should the Individual $19 first month behave as a trial, promotion, or discounted first invoice?
- Should AI usage have soft limits, hard limits, or fair-use language?
- Should storage be unlimited within fair use or explicitly capped?
- Should API access be included in Team at launch or reserved until the API is mature?
- What happens when a Team account exceeds 100 users?
- How long is data retained after cancellation?

## Acceptance Criteria

This RFC is ready for implementation when:

- Every plan has clear entitlements.
- Billing behavior is defined.
- Trial or introductory pricing behavior is defined.
- Upgrade and downgrade paths are defined.
- AI usage and storage policies are defined.
- Cancellation and retention behavior is defined.
- Engineering can implement subscription logic without guessing.
