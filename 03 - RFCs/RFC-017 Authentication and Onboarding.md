# RFC 017 Authentication and Onboarding

Status:
Draft

Owner:
Chief Product and Design Officer

Reviewers:
CEO, Codex Lead Engineer

## Purpose

Define how a new customer creates an account, creates an Organization, subscribes, and reaches their first useful Harbor Vault experience.

Onboarding is part of the product.

A smooth onboarding experience is especially important for the small Organizations Harbor Vault serves.

## Signup Principle

Ask for the minimum information needed to get started.

Required signup fields:

- Name
- Email
- Password or sign in with provider
- Organization Name

Everything else can be completed later.

## Standard Customer Journey

```text
Pricing
  Choose Plan
    Create Account
      Verify Email
        Create Organization
          Pay
            Enter Harbor Vault
              Complete Onboarding Checklist
```

## Authentication Methods

Foundation should support:

- Email and password
- Email verification

Future options:

- Google sign in
- Microsoft sign in
- SSO for 100+ Users or future Enterprise

## Account Creation

The user creates a personal user account first.

Required:

- Name
- Email
- Password or provider login

Do not ask for:

- Phone number
- Address
- Company size
- Industry
- Job title
- Billing details before plan selection requires them

## Email Verification

Email verification should happen before full Harbor Vault access.

The flow should be clear and forgiving:

- Send verification email.
- Let user resend email.
- Let user change email if mistyped.
- Continue the flow after verification.

## Organization Creation

After account creation, the user creates the first Organization.

Required:

- Organization Name

Optional later:

- Logo
- Industry
- Website
- Team size
- Time zone

Do not require a long setup wizard.

## Sensible Defaults

When a new Organization is created, Harbor Vault should automatically create useful starting structure.

Recommended defaults:

- General
- Projects
- Meeting Notes
- Policies
- Templates

These can map to Document Spaces, templates, or starter areas depending on implementation.

The goal is to avoid an empty application.

## First-Run Experience

When someone signs in for the first time, show a simple onboarding checklist.

Example:

```text
Welcome to Harbor Vault

[ ] Invite your team
[ ] Create your first project
[ ] Upload your first document
[ ] Ask Harbor AI a question
[ ] Complete your Organization profile
```

The checklist should guide users to value, not force configuration.

## Harbor AI Onboarding

Harbor AI should help reduce setup.

Examples:

- "Create a project for our website redesign."
- "Set up a space for meeting notes."
- "Create a starter checklist for onboarding a new client."

AI should create drafts or actions with confirmation where appropriate.

## Progressive Disclosure

New users should initially see:

- Work
- Documents
- Calendar
- Harbor AI
- Reports

Power users can discover later:

- Templates
- Automations
- API
- Advanced reports
- Security settings

Do not overwhelm the first-run experience.

## Empty States

Every empty state should explain:

- What this area is for.
- Why it matters.
- The next action.

Example:

No Work yet. Create your first Work item to start tracking what needs to happen, who owns it, and what comes next.

## Invitations

Owners and authorized Administrators can invite team members.

Invitation should include:

- Email
- Role
- Optional message

Invited users should land in the correct Organization after accepting.

## Permissions

Only Owners and authorized Administrators can invite Members during Foundation unless later changed.

New account creators become the Owner of the Organization they create.

## Data Model Implications

Relevant tables or collections:

- users
- organizations
- organization_memberships
- invitations
- onboarding_checklists
- onboarding_tasks
- auth_events

Onboarding checklist fields:

- organizationId
- userId
- taskKey
- status
- completedAt
- dismissedAt

## Failure States

Account creation failure:

- Explain the issue.
- Preserve entered information where safe.

Email verification failure:

- Allow resend.
- Allow email correction.

Payment failure:

- Send user back to checkout or Billing with a clear message.

Organization creation failure:

- Retry without losing account.

## Open Questions

- Should Google sign in ship in Foundation?
- Should users be allowed to explore demo data before paying?
- Should onboarding checklist tasks be dismissible?
- Should the first Organization be created before or after payment?
- Should Harbor AI generate starter Work and Documents during onboarding?

## Acceptance Criteria

- A customer can create an account with minimal fields.
- Email verification is defined.
- New users can create their first Organization.
- Standard plans connect to the billing flow in RFC 016.
- New Organizations receive sensible defaults.
- First-run onboarding checklist is defined.
- Empty states guide users toward useful actions.
- Invitations and first Owner behavior are defined.
- The flow supports becoming a customer in under five minutes.
