# RFC 003 Organizations

Status:
Draft

Owner:
Chief Product and Design Officer

Reviewers:
CEO, Codex Lead Engineer

## Problem Statement

Most CRMs revolve around contacts. Harbor Vault should revolve around Organizations because that scales better for B2B customers and business operations.

## Goals

- Make Organizations the primary record type.
- Connect People, Work, Documents, Notes, Activity, and AI insights to Organizations.
- Provide a complete relationship view.
- Support customers, vendors, partners, prospects, and internal entities.

## Non Goals

- Build a full CRM.
- Build invoicing in the Foundation.
- Build complex parent child organization hierarchies unless validated.

## User Stories

- As an owner, I want to see the current state of a business relationship.
- As a manager, I want all work and documents related to an organization in one place.
- As an employee, I want context before contacting a customer or completing work.

## UI Direction Or Mockup Notes

Organization Detail should include:

- Overview
- Contacts
- Locations
- Work
- Documents
- Notes
- Activity
- AI Summary

## Workflow

User opens an Organization, reads the AI Summary, reviews open Work and recent Activity, then takes the next action.

## Permissions

Organization visibility may vary by role. Sensitive documents and financial data should be permission restricted.

## Data Model Implications

Organization should relate to:

- People
- Work
- Documents
- Notes
- Activity events
- Insights
- Locations
- Invoices later

## Harbor AI Behavior

Harbor AI should summarize relationship status, risks, stale activity, open work, and suggested next actions.

## Future Considerations

- Parent child Organizations
- Organization health scoring
- Customer portal views
- Invoices and payments

## Acceptance Criteria

- Organization is the primary relationship anchor.
- Organization Detail shows relationship state.
- Related Work, People, Documents, Notes, and Activity are connected.
- Harbor AI can generate an Organization summary.
