# Harbor Vault User Roles and Permissions

Phase 2A

## Purpose

Roles and permissions should be defined before product screens are built.

Permissions become easier when the system knows who can see, create, edit, approve, and export information from the beginning.

## Initial Roles

1. Owner
2. Administrator
3. Manager
4. Employee
5. Customer Portal

## Role Definitions

### Owner

The Owner has full access to the Harbor Vault account.

Owner can:

- View all modules
- Manage billing
- Manage users
- Manage roles and permissions
- View financial KPIs
- Configure Harbor AI settings
- Approve AI suggested actions
- Export reports
- Delete records
- Access sensitive documents

### Administrator

The Administrator manages system configuration and operational setup.

Administrator can:

- View all core modules
- Invite users
- Manage most roles
- Configure notifications
- Manage integrations
- Create and edit Organizations
- Create and edit Work
- Upload and manage Documents
- View most reports
- Configure Business Health rules

Administrator may not:

- Manage billing unless granted
- Delete the account
- Override Owner permissions

### Manager

The Manager oversees teams, relationships, and work.

Manager can:

- View Dashboard
- View Organizations
- View People
- View and manage assigned Work
- View team capacity
- View operational reports
- Upload Documents
- Add notes
- Review Harbor AI suggestions

Manager may not:

- Manage billing
- Manage global permissions
- Delete high value records
- View restricted financial data unless granted

### Employee

The Employee completes assigned work and uses Harbor Vault for daily context.

Employee can:

- View assigned Work
- View relevant Organization details
- View relevant People
- Add notes
- Upload work related Documents
- Update Work status
- View Calendar assignments
- Use Harbor AI within permitted context

Employee may not:

- View all financial KPIs
- Access restricted documents
- Manage users
- Export all reports
- Change system settings

### Customer Portal

Customer Portal users are external users with limited access.

Customer Portal can:

- View shared Work
- View shared Documents
- Submit updates or requests
- View relevant Calendar events
- Communicate with the business

Customer Portal may not:

- Access internal notes
- View financial KPIs
- View other Organizations
- Use internal Harbor AI insights
- Access internal reports

## Permission Matrix

| Capability | Owner | Administrator | Manager | Employee | Customer Portal |
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

Permissions should be understandable.

Avoid dozens of tiny permission switches in the MVP.

Start with role based permissions, then add overrides later if customers need them.

## Sensitive Data Categories

Some data should be permission aware from the beginning:

- Financial KPIs
- Invoices later
- Payroll or team capacity details
- Sensitive documents
- Customer private notes
- AI generated risk summaries
- Exports

## Harbor AI Permissions

Harbor AI must respect the user's permissions.

If a user cannot access financial KPIs, Harbor AI should not reveal financial conclusions.

If a user cannot access restricted documents, Harbor AI should not summarize them.

If a user can only view assigned Work, Harbor AI should only answer within that scope.

## Open Questions

- Should Customer Portal be included in MVP or designed for a later release?
- Should Managers see financial KPIs by default?
- Should AI suggested actions require approval before execution?
- Should permissions be organization specific in MVP?
- Which records are soft deleted versus permanently deleted?
