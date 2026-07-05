# Harbor Vault Product Specification

Phase 2A

Module 2 Organizations

## Purpose

Organizations are the heart of Harbor Vault.

Most CRMs revolve around contacts.

Harbor Vault revolves around Organizations.

That makes the system stronger for B2B customers and flexible enough to serve many industries.

## Primary Question

What is the current state of this relationship?

## Organization Definition

An Organization is any business, customer, vendor, partner, or entity the company works with.

An Organization can contain:

- People
- Locations
- Documents
- Work
- Invoices later
- History
- Notes
- AI summaries
- Activity
- Assets later

## Core Screens

### Organization List

Purpose:
Help users find and prioritize organizations.

Should show:

- Organization name
- Type
- Status
- Primary contact
- Open Work count
- Last activity
- Business Health status
- Next action

Filters:

- Active
- Needs Attention
- Customer
- Vendor
- Partner
- Prospect
- Recently updated
- No recent activity

Harbor AI behavior:

- Surface organizations that need attention
- Identify relationships going quiet
- Highlight overdue Work
- Explain status changes

### Organization Detail

Purpose:
Show the complete operating view of an organization.

Top section should show:

- Organization name
- Type
- Status
- Business Health status
- Primary contact
- Next action
- Harbor AI summary

Tabs or sections:

- Overview
- Contacts
- Locations
- Work
- Documents
- Notes
- Activity
- AI Summary

### Overview

Purpose:
Give the user the current state without forcing them to inspect every tab.

Should show:

- Harbor AI summary
- Open Work
- Important dates
- Recent activity
- Outstanding issues
- Documents needing review
- Relationship status

### Contacts

Purpose:
Show the people connected to the Organization.

Should show:

- Name
- Role
- Email
- Phone
- Primary contact flag
- Decision maker flag
- Last interaction

### Locations

Purpose:
Support businesses with multiple offices, jobsites, branches, properties, or service locations.

Should show:

- Location name
- Address
- Type
- Primary contact
- Related Work
- Notes

### Work

Purpose:
Show all Work connected to the Organization.

Should show:

- Active Work
- Waiting Work
- Blocked Work
- Completed Work
- Upcoming Work

### Documents

Purpose:
Keep relationship documents attached to the Organization.

Should support:

- Upload
- Category
- Related Work
- Visibility
- AI summary

### Notes

Purpose:
Capture important relationship context.

Notes should be structured enough to be useful to Harbor AI.

### Activity

Purpose:
Show meaningful history.

Do not show noise.

Show:

- Work completed
- Proposal approved
- Important note added
- Document uploaded
- Status changed
- AI insight generated

### AI Summary

Purpose:
Give the user a plain language relationship brief.

Should answer:

- What is happening with this Organization?
- What changed recently?
- What needs attention?
- What should we do next?

## Data Fields

Minimum MVP fields:

- Organization ID
- Name
- Type
- Status
- Industry optional
- Website optional
- Phone optional
- Email optional
- Primary contact
- Owner
- Created date
- Updated date
- Last activity date
- Business Health status
- AI summary

## Statuses

Initial statuses:

- Active
- Prospect
- On Hold
- Needs Attention
- Inactive

## Organization Types

Initial types:

- Customer
- Prospect
- Vendor
- Partner
- Internal
- Other

## User Actions

Users can:

- Create Organization
- Edit Organization
- Add Contact
- Add Location
- Add Work
- Upload Document
- Add Note
- View Activity
- Ask Harbor AI about the Organization

## Harbor AI Behavior

Harbor AI should:

- Summarize the Organization
- Identify risks
- Identify stale relationships
- Suggest next actions
- Summarize recent activity
- Explain Business Health status
- Flag missing information

## Mobile Behavior

Mobile Organization view should prioritize:

1. AI Summary
2. Next Action
3. Open Work
4. Contacts
5. Recent Activity

Do not compress the full desktop view into mobile.

## Open Questions

- Should Organization type be required?
- Should Organizations support parent and child relationships in MVP?
- Should locations be included in MVP or v1.1?
- Should AI summaries be generated automatically or on demand?
- Which Organization activity events are meaningful enough to show?
