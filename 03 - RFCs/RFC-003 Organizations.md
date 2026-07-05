# RFC 003 Organizations

Status:
Draft

Version:
1.0

Owner:
Chief Product and Design Officer

Reviewers:
CEO, Codex Lead Engineer

Depends on:
RFC 001 Harbor Model, RFC 002 Dashboard

## Summary

Organizations are the primary operating context in Harbor Vault.

Harbor Vault is organization first rather than user first. Users may belong to more than one Organization, but every meaningful object inside the product must be scoped to a single active Organization.

The Organization is both a user-facing business record and the boundary for context, collaboration, permissions, AI, search, reporting, branding, and security.

## Terminology Note

The Harbor Model uses Organization as the central product object.

An Organization can represent:

- A customer.
- A prospect.
- A vendor.
- A partner.
- An internal department or business unit.
- A nonprofit.
- A government agency.
- A school.
- A client.
- The business using Harbor Vault.

If future implementation requires a separate legal, billing, or infrastructure tenant object, that object should be called Account or Workspace. The user-facing product should still make Organization the primary mental model.

## Problem Statement

Most CRMs revolve around contacts. Many SaaS products revolve around individual users.

Harbor Vault should revolve around Organizations because business operations, permissions, AI context, search, reporting, documents, and Work all need a durable business boundary.

Without a strong Organization model, Harbor Vault risks:

- Leaking context across unrelated businesses.
- Making AI summaries unreliable.
- Making permissions hard to reason about.
- Forcing users to navigate from disconnected records.
- Limiting future enterprise capabilities.

## Purpose

Organizations provide:

- Identity.
- Ownership.
- Collaboration.
- Permissions.
- AI context.
- Reporting.
- Branding.
- Security.
- Data isolation.

The current Organization should always be visible in the product experience.

Users should always know where they are working.

## Goals

Organizations should:

- Be the primary relationship anchor.
- Feel lightweight to create.
- Scale from one-person businesses to enterprises.
- Isolate customer data.
- Support multiple teams.
- Support future enterprise features.
- Minimize navigation complexity.
- Provide a consistent context for AI.
- Connect People, Work, Documents, Notes, Activity, Locations, Reports, and Insights.
- Support customers, vendors, partners, prospects, internal entities, and future workspace use cases.

## Non Goals

Organizations are not:

- Authentication providers.
- Billing providers.
- Document repositories.
- Workflow engines.
- A full CRM by themselves.
- A replacement for future Work, Documents, Reporting, AI, or Billing RFCs.

Do not build invoicing, payments, complex parent-child hierarchies, SSO, SCIM, or enterprise compliance features in the Foundation unless validated.

## Core Principles

### Principle 1 Every Object Belongs To One Organization

Every meaningful Harbor Vault object should belong to exactly one Organization unless a future RFC explicitly defines a cross-Organization object.

Examples:

- Work.
- Documents.
- AI conversations.
- Reports.
- Calendar events.
- Notifications.
- Notes.
- Activity.

No shared ownership exists by default.

### Principle 2 Organizations Own Data

Organizations own data.

Users do not.

If a user leaves an Organization, the Organization data remains.

### Principle 3 Organizations Are Isolated

Permissions, search, AI context, reporting, documents, Work, and dashboards must not leak across Organizations.

This is a logical product boundary. The implementation may use shared infrastructure, but application access and AI context must remain Organization scoped.

### Principle 4 Context Is Always Visible

The current Organization is always visible in navigation.

Organization switching changes the entire product context.

## User Stories

- As an owner, I want to see the current state of a business relationship.
- As an administrator, I want Organization settings, branding, members, and AI configuration in one place.
- As a manager, I want all Work and Documents related to an Organization in one place.
- As a team member, I want context before contacting a customer or completing Work.
- As a user in multiple Organizations, I want to switch contexts without data leaking between them.

## Organization Lifecycle

Recommended lifecycle:

1. Create.
2. Configure.
3. Invite Members.
4. Create Work.
5. Grow.
6. Archive.
7. Restore optional.
8. Delete.

Deletion is intentionally difficult.

## Organization Object

Minimum Foundation fields:

- id
- name
- slug
- logo
- description
- type
- industry
- website
- phone
- email
- primaryContactId
- ownerId
- status
- businessHealthStatus
- lastActivityAt
- createdAt
- updatedAt

Future or optional fields:

- coverImage
- companySize
- address
- timeZone
- locale
- dateFormat
- currency
- brandColor
- accentColor
- aiSummary

## Status Values

Foundation lifecycle statuses:

- Active
- Pending
- Archived
- Suspended

Relationship statuses:

- Prospect
- Customer
- Vendor
- Partner
- Internal
- Needs Attention
- Inactive

Lifecycle status and relationship status should remain separate fields.

## Organization Profile

The Organization Profile contains:

Identity:

- Name.
- Logo.
- Cover image.
- Description.

Business information:

- Type.
- Industry.
- Company size.
- Website.

Contact:

- Email.
- Phone.
- Address.
- Primary contact.

Localization:

- Time zone.
- Locale.
- Date format.
- Currency.

Operating context:

- Owner.
- Business Health status.
- Last activity.
- Next action.
- Harbor AI summary.

## Core Screens

### Organization List

Purpose:
Help users find and prioritize Organizations.

Should show:

- Organization name.
- Type.
- Status.
- Primary contact.
- Open Work count.
- Last activity.
- Business Health status.
- Next action.

Filters:

- Active.
- Needs Attention.
- Customer.
- Vendor.
- Partner.
- Prospect.
- Recently updated.
- No recent activity.

Harbor AI behavior:

- Surface Organizations that need attention.
- Identify relationships going quiet.
- Highlight overdue Work.
- Explain status changes.

### Organization Detail

Purpose:
Show the complete operating view of an Organization.

Top section should show:

- Organization name.
- Type.
- Status.
- Business Health status.
- Primary contact.
- Next action.
- Harbor AI summary.

Tabs or sections:

- Overview.
- Contacts.
- Locations.
- Work.
- Documents.
- Notes.
- Activity.
- AI Summary.
- Settings for users with permission.

### Overview

Purpose:
Give the user the current state without forcing them to inspect every tab.

Should show:

- Harbor AI summary.
- Open Work.
- Important dates.
- Recent activity.
- Outstanding issues.
- Documents needing review.
- Relationship status.

### Contacts

Purpose:
Show the People connected to the Organization.

Should show:

- Name.
- Role.
- Email.
- Phone.
- Primary contact flag.
- Decision maker flag.
- Last interaction.

### Locations

Purpose:
Support businesses with multiple offices, jobsites, branches, properties, or service locations.

Should show:

- Location name.
- Address.
- Type.
- Primary contact.
- Related Work.
- Notes.

### Work

Purpose:
Show all Work connected to the Organization.

Should show:

- Active Work.
- Waiting Work.
- Blocked Work.
- Completed Work.
- Upcoming Work.

### Documents

Purpose:
Keep relationship documents attached to the Organization.

Should support:

- Upload.
- Category.
- Related Work.
- Visibility.
- AI summary.

### Notes

Purpose:
Capture important relationship context.

Notes should be structured enough to be useful to Harbor AI.

### Activity

Purpose:
Show meaningful history.

Do not show noise.

Show:

- Work completed.
- Proposal approved.
- Important note added.
- Document uploaded.
- Status changed.
- AI insight generated.

### AI Summary

Purpose:
Give the user a plain language relationship brief.

Should answer:

- What is happening with this Organization?
- What changed recently?
- What needs attention?
- What should we do next?

## Organization Settings

Organization settings are divided into categories.

General:

- Organization name.
- Logo.
- Brand color.
- Language.
- Time zone.

Security:

- Session duration.
- MFA policy.
- Password policy.
- API access.

AI:

- Default model later.
- Memory policy.
- Knowledge access.
- Prompt templates later.
- Usage limits later.

Documents:

- Retention policy later.
- Version history.
- Default folder.

Notifications:

- Email.
- Push later.
- Digest schedule.

Appearance:

- Theme.
- Branding.
- Accent color.

## Membership

Users become Members of Organizations.

Membership is separate from User.

```text
User
  Membership
    Organization
```

This allows one user to belong to many Organizations with different roles.

Membership fields:

- id
- organizationId
- userId
- role
- joinedAt
- invitedAt
- status

Membership statuses:

- Active
- Invited
- Pending
- Suspended

Example:
Alice can be an Administrator in Organization A and a Viewer in Organization B.

## Teams

Organizations contain optional Teams.

Examples:

- Operations.
- Sales.
- Finance.
- HR.
- Engineering.
- Marketing.

Small Organizations may use no Teams.

Large Organizations may use many Teams.

Team fields:

- id
- organizationId
- name
- description
- leadId
- createdAt

## Departments

Departments are optional enterprise metadata.

Departments represent organizational structure, while Teams represent collaboration groups.

Examples:

- North America.
- EMEA.
- Sales.
- Manufacturing.

Departments are deferred unless validated.

## Navigation

When inside an Organization, navigation should include:

- Dashboard.
- Work.
- Documents.
- Harbor AI.
- Calendar.
- Reporting.
- Settings.

Organization switcher remains visible.

## Organization Switcher

Users may belong to multiple Organizations.

Navigation includes the active Organization and a switcher.

Example:

```text
Harbor Labs
Acme Inc.
City Council
My Startup
+ Create Organization
```

Switching Organizations changes:

- Dashboard.
- Search.
- Harbor AI.
- Documents.
- Work.
- Reporting.
- Settings.

Everything.

## Ownership

Organizations own:

- Work.
- Knowledge.
- Files.
- Reports.
- AI memory.
- Calendar.
- Members.
- Teams.
- Settings.
- Notifications.
- Branding.

Everything inherits Organization ownership unless a future RFC defines otherwise.

## Permissions Boundary

Permissions never cross Organizations.

A user's role is evaluated through Membership.

Organization visibility may vary by role.

Sensitive Documents, financial data, AI summaries, reports, and settings should be permission restricted.

## Branding

Each Organization supports:

- Logo.
- Primary color.
- Accent color.
- Custom icon later.
- Optional cover image.

Future:

- Custom domain.
- White labeling.

## AI Context

Harbor AI operates inside Organization context.

Harbor AI should know the active Organization's:

- Work.
- Knowledge.
- Documents.
- Policies.
- Members.
- Goals.
- Reports.
- Activity.

Changing Organizations resets AI context.

No context leaks across Organizations.

Harbor AI should:

- Summarize the Organization.
- Identify risks.
- Identify stale relationships.
- Suggest next actions.
- Summarize recent activity.
- Explain Business Health status.
- Flag missing information.

## Search Scope

Search is Organization aware.

Searching only returns resources inside the current Organization that the user has permission to view.

Search may include:

- People.
- Work.
- Documents.
- Notes.
- Reports.
- Activity.
- Settings.

## Dashboard Scope

The Dashboard is Organization specific.

Metrics include:

- Open Work.
- Recent Documents.
- Upcoming meetings.
- Activity.
- Reports.
- AI insights.

## Archive

Archiving:

- Disables editing.
- Keeps data.
- Keeps reports.
- Keeps audit history.
- Allows restoration.

Archive should not cause permanent data loss.

## Deletion

Deletion requires:

- Organization Owner permission.
- Explicit confirmation.
- Password re-entry later.
- Waiting period later.
- Background deletion later.

Deletion removes Organization-owned:

- Work.
- Documents.
- Knowledge.
- Reports.
- AI history.
- Calendar.
- Settings.

## Data Model Implications

Core tables or collections:

- organizations
- organization_memberships
- teams
- departments later
- locations
- organization_settings
- organization_branding

Organization-scoped tables:

- people
- work_items
- work_assignments
- documents
- notes
- activity_events
- calendar_events
- reports
- insights
- ai_conversations

Every Organization-scoped table should include organizationId.

## User Actions

Users can:

- Create Organization.
- Edit Organization.
- Archive Organization.
- Restore Organization.
- Add Contact.
- Add Location.
- Add Work.
- Upload Document.
- Add Note.
- Invite Member.
- Manage Teams.
- View Activity.
- Ask Harbor AI about the Organization.

## Mobile Behavior

Mobile Organization view should prioritize:

1. AI Summary.
2. Next Action.
3. Open Work.
4. Contacts.
5. Recent Activity.

Do not compress the full desktop view into mobile.

## Future Enterprise Features

Reserved:

- SSO.
- SCIM.
- Audit logs.
- Compliance.
- Legal hold.
- Regional storage.
- Data residency.
- Organization templates.
- Policy engine.
- Custom workflows.
- Billing centers.
- Multiple subsidiaries.
- Custom domains.
- White labeling.

## Relationship Model

```text
Organization
  Dashboard
  Work
  Documents
  Harbor AI
  Calendar
  Reporting
  People
  Locations
  Members
  Teams
  Settings
  Notifications
  Search
  Branding
```

Every major Harbor Vault module is rooted at the Organization.

## User Experience Principles

Organizations should:

- Be created in under two minutes.
- Require minimal setup.
- Support immediate collaboration.
- Make current context obvious.
- Scale naturally from one user to thousands.
- Provide a secure boundary for all data.

## Open Questions

- Should Organization type be required?
- Should Organizations support parent and child relationships in the Foundation?
- Should Locations be included in the Foundation or deferred?
- Should AI summaries be generated automatically or on demand?
- Which Organization activity events are meaningful enough to show?
- Should the product use Account or Workspace for future billing and infrastructure tenancy?
- Should users be able to create multiple Organizations during the Foundation release?

## Related Decisions

- D-002 Organizations are the primary entity.
- D-016 Organizations are the active operating context.
- D-017 Membership is separate from User.
- D-018 Organization context scopes search, AI, dashboard, and permissions.

## Acceptance Criteria

- Organizations are the root container for all platform resources.
- Every Organization-scoped resource belongs to exactly one Organization.
- Users can belong to multiple Organizations with independent Memberships and roles.
- Organization switching updates all application context without exposing data from other Organizations.
- Search, AI, Dashboard, Reporting, Documents, and Work are scoped to the active Organization.
- Organizations support lifecycle states of Active, Pending, Archived, and Suspended.
- Organizations can be archived and restored without data loss.
- Organization deletion is gated by explicit confirmation and permanently removes Organization-owned data.
- Teams, branding, settings, and AI configuration are managed at the Organization level.
- Organization Detail shows relationship state.
- Related Work, People, Documents, Notes, Activity, Locations, and AI summaries are connected.
- The architecture supports future enterprise capabilities without requiring changes to the core Organization model.

## Design Rationale

The Organization is the foundational domain object in Harbor Vault.

Rather than treating it as a simple grouping mechanism, it defines the platform's user-facing identity, ownership, security, collaboration, and AI boundaries.

All subsequent RFCs assume that every resource, workflow, and user interaction occurs within an Organization context, creating a consistent mental model for users and a scalable architecture for future enterprise features.
