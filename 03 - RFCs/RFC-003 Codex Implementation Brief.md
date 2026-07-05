# RFC 003 Codex Implementation Brief

## Build Target

Create the Harbor Vault Organizations module as the primary operating context and relationship surface.

## Routes

- `/organizations`
- `/organizations/new`
- `/organizations/:id`
- `/organizations/:id/overview`
- `/organizations/:id/contacts`
- `/organizations/:id/locations`
- `/organizations/:id/work`
- `/organizations/:id/documents`
- `/organizations/:id/notes`
- `/organizations/:id/activity`
- `/organizations/:id/settings`

## Required Components

- OrganizationListPage
- OrganizationDetailPage
- OrganizationHeader
- OrganizationSwitcher
- OrganizationHealthBadge
- OrganizationAISummary
- OrganizationOverviewPanel
- OrganizationContactsPanel
- OrganizationLocationsPanel
- OrganizationWorkPanel
- OrganizationDocumentsPanel
- OrganizationNotesPanel
- OrganizationActivityFeed
- OrganizationSettingsPanel
- OrganizationEmptyState
- OrganizationSkeleton

## Suggested Core Entities

- Organization
- OrganizationMembership
- Team
- Location
- OrganizationSettings
- OrganizationBranding

## Product Rules

- Organization context must always be visible.
- Every Organization-scoped record must include organizationId.
- Users can belong to multiple Organizations through Memberships.
- Switching Organizations changes Dashboard, Search, Harbor AI, Documents, Work, Reporting, and Settings.
- Harbor AI must not use context from another Organization.
- Activity must show meaningful events only.
- Organization creation should feel lightweight.

## First Build Target

Build:

1. Organization list route.
2. Organization detail route.
3. Organization switcher placeholder.
4. Organization header with status and health.
5. Overview, Contacts, Work, Documents, Activity, and AI Summary sections.
6. Empty, loading, and basic permission states.
