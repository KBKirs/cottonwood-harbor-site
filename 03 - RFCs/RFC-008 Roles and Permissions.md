# RFC 008 Roles and Permissions

Status:
Draft

Owner:
Chief Product and Design Officer

Reviewers:
CEO, Codex Lead Engineer

## Problem Statement

Roles and permissions should be defined before product screens are built.

Permissions become easier when the system knows who can see, create, edit, approve, export, and configure information from the beginning.

## Goals

- Define initial Harbor Vault roles.
- Keep Foundation permissions understandable.
- Scope permissions to Organization Membership.
- Protect sensitive data from the beginning.
- Ensure Harbor AI inherits user permissions.

## Non Goals

- Build a complex custom permission builder in Foundation.
- Build every enterprise permission override before validation.
- Build Customer Portal behavior before the portal is approved.

## Initial Roles

1. Owner
2. Administrator
3. Manager
4. Team Member
5. Customer Portal later

## Role Definitions

### Owner

The Owner has full access to the Harbor Vault Organization or account.

Owner can:

- View all modules.
- Manage billing later.
- Manage users.
- Manage roles and permissions.
- View financial KPIs.
- Configure Harbor AI settings.
- Approve AI suggested actions.
- Export reports.
- Delete records.
- Access sensitive Documents.

### Administrator

The Administrator manages system configuration and operational setup.

Administrator can:

- View all core modules.
- Invite users.
- Manage most roles.
- Configure notifications.
- Manage integrations later.
- Create and edit Organizations.
- Create and edit Work.
- Upload and manage Documents.
- View most reports.
- Configure Business Health rules.

Administrator may not:

- Manage billing unless granted.
- Delete the account.
- Override Owner permissions.

### Manager

The Manager oversees teams, relationships, and Work.

Manager can:

- View Dashboard.
- View Organizations.
- View People.
- View and manage assigned or team Work.
- View team capacity where permitted.
- View operational reports.
- Upload Documents.
- Add notes.
- Review Harbor AI suggestions.

Manager may not:

- Manage billing.
- Manage global permissions.
- Delete high-value records.
- View restricted financial data unless granted.

### Team Member

The Team Member completes assigned Work and uses Harbor Vault for daily context.

Team Member can:

- View assigned Work.
- View relevant Organization details.
- View relevant People.
- Add notes.
- Upload Work-related Documents.
- Update Work status.
- View Calendar assignments.
- Use Harbor AI within permitted context.

Team Member may not:

- View all financial KPIs.
- Access restricted Documents.
- Manage users.
- Export all reports.
- Change system settings.

### Customer Portal Later

Customer Portal users are external users with limited access.

Customer Portal can:

- View shared Work.
- View shared Documents.
- Submit updates or requests.
- View relevant Calendar events.
- Communicate with the business.

Customer Portal may not:

- Access internal notes.
- View financial KPIs.
- View other Organizations.
- Use internal Harbor AI insights.
- Access internal reports.

## Permission Matrix

| Capability | Owner | Administrator | Manager | Team Member | Customer Portal |
| --- | --- | --- | --- | --- | --- |
| View Dashboard | Yes | Yes | Yes | Limited | No |
| View Organizations | Yes | Yes | Yes | Limited | Own only |
| Create Organizations | Yes | Yes | Optional | No | No |
| Edit Organizations | Yes | Yes | Optional | No | No |
| View People | Yes | Yes | Yes | Limited | Shared only |
| Manage Users | Yes | Yes | No | No | No |
| View Work | Yes | Yes | Yes | Assigned | Shared only |
| Create Work | Yes | Yes | Yes | Optional | Request only |
| Edit Work | Yes | Yes | Yes | Assigned | Limited |
| View Documents | Yes | Yes | Yes | Relevant | Shared only |
| Upload Documents | Yes | Yes | Yes | Relevant | Shared only |
| View Financial KPIs | Yes | Optional | Optional | No | No |
| View Reports | Yes | Yes | Yes | Limited | No |
| Approve AI Actions | Yes | Optional | Optional | No | No |
| Configure Harbor AI | Yes | Yes | No | No | No |
| Manage Settings | Yes | Yes | No | No | No |
| Export Data | Yes | Optional | Optional | No | No |

## Permission Principles

- Permissions should be understandable.
- Start with role-based permissions.
- Add overrides later only when customers need them.
- Permissions are evaluated through Organization Membership.
- Harbor AI must respect the same permissions as the user.

## Sensitive Data Categories

Some data should be permission aware from the beginning:

- Financial KPIs.
- Invoices later.
- Payroll or team capacity details.
- Sensitive Documents.
- Customer private notes.
- AI-generated risk summaries.
- Exports.

## Harbor AI Permissions

Harbor AI must respect the user's permissions.

If a user cannot access financial KPIs, Harbor AI should not reveal financial conclusions.

If a user cannot access restricted Documents, Harbor AI should not summarize them.

If a user can only view assigned Work, Harbor AI should only answer within that scope.

## Open Questions

- Should Customer Portal be included in Foundation or designed for a later release?
- Should Managers see financial KPIs by default?
- Should AI suggested actions require approval before execution?
- Should permissions be Organization specific in Foundation?
- Which records are soft deleted versus permanently deleted?

## Acceptance Criteria

- Initial roles are defined.
- Permissions are understandable and role based.
- Permissions are scoped through Organization Membership.
- Sensitive data categories are identified.
- Harbor AI inherits user permissions.
- Customer Portal permissions are clearly deferred unless approved.
