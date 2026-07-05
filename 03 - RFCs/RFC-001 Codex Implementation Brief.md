# RFC 001 Codex Implementation Brief

## Objective

Use RFC 001 as the conceptual foundation for Harbor Vault routing, data modeling, and component planning.

## Suggested App Routes

- `/dashboard`
- `/organizations`
- `/organizations/:id`
- `/people`
- `/work`
- `/work/:id`
- `/calendar`
- `/documents`
- `/reports`
- `/harbor-ai`
- `/settings`

## Suggested Core Entities

- Organization
- Person
- WorkItem
- Document
- Note
- Event
- Insight
- User
- Role

## Suggested First Build Target

Build the app shell around the Harbor Model:

- Sidebar navigation
- Dashboard route
- Organizations route placeholder
- Work route placeholder
- Documents route placeholder
- Reports route placeholder
- Harbor AI route placeholder

## Product Rule

Do not design Harbor Vault as a CRM clone.

Organizations are the central object, and Work is the universal operating object.
