# Harbor Vault Information Architecture

Phase 2A

## Purpose

The Information Architecture defines the structure of Harbor Vault before major screens are built.

It exists to prevent rework, keep the experience consistent, and make sure every module supports the same product rule:

What should I do next?

## Product Category

Harbor Vault is a Business Operating System.

It is designed to help businesses organize:

- Organizations
- People
- Work
- Knowledge
- Insights

## Architecture Principle

Harbor Vault is AI native.

Every major module should assume Harbor AI can summarize information, surface risks, suggest next actions, and explain trends in plain language.

AI is not an add on.

AI is part of the product structure.

## Primary Navigation

Initial sidebar modules:

1. Dashboard
2. Organizations
3. People
4. Work
5. Calendar
6. Documents
7. Reporting
8. Harbor AI
9. Settings

## IA Tree

```text
Harbor Vault
+-- Dashboard
|   +-- Harbor AI Brief
|   +-- KPI Cards
|   +-- Today's Work
|   +-- Calendar Snapshot
|   +-- Business Health
|   +-- Activity Feed
|   +-- Reports Snapshot
|
+-- Organizations
|   +-- Organization List
|   +-- Organization Detail
|   |   +-- Overview
|   |   +-- Contacts
|   |   +-- Locations
|   |   +-- Work
|   |   +-- Documents
|   |   +-- Notes
|   |   +-- Activity
|   |   +-- AI Summary
|   +-- Organization Create Edit
|
+-- People
|   +-- People List
|   +-- Person Detail
|   +-- Role Assignment
|   +-- Related Organizations
|
+-- Work
|   +-- Active
|   +-- Calendar
|   +-- Waiting
|   +-- Blocked
|   +-- Completed
|   +-- Work Detail
|   +-- Work Create Edit
|
+-- Calendar
|   +-- Today
|   +-- Tomorrow
|   +-- This Week
|   +-- Event Detail
|
+-- Documents
|   +-- Library
|   +-- Categories
|   +-- Document Detail
|   +-- Upload
|   +-- AI Summary
|
+-- Reporting
|   +-- Overview
|   +-- Revenue
|   +-- Customers
|   +-- Operations
|   +-- Team Capacity
|   +-- Growth
|   +-- AI Trend Explanation
|
+-- Harbor AI
|   +-- AI Brief
|   +-- Insights
|   +-- Suggested Actions
|   +-- Ask Harbor AI
|   +-- AI History
|
+-- Settings
    +-- Account
    +-- Users
    +-- Roles
    +-- Permissions
    +-- Integrations
    +-- Notifications
    +-- Billing
```

## Module Definitions

### Dashboard

Purpose:
Show what needs attention now.

Core screens:

- Dashboard Overview
- Harbor AI Brief
- Today's Work
- Business Health
- KPI Summary
- Activity Feed
- Reports Snapshot

Primary question:
What should I focus on today?

### Organizations

Purpose:
Manage the businesses, customers, vendors, partners, and entities the company works with.

Core screens:

- Organization List
- Organization Detail
- Contacts
- Locations
- Related Work
- Documents
- Notes
- Activity
- AI Summary

Primary question:
What is the current state of this relationship?

### People

Purpose:
Manage internal team members and external contacts.

Core screens:

- People List
- Person Detail
- Roles and Permissions
- Related Organizations
- Assignments
- Activity
- AI Summary

Primary question:
Who is involved and what do they need?

### Work

Purpose:
Manage anything that needs to be planned, tracked, completed, renewed, resolved, or followed up.

Core screens:

- Active Work
- Work Calendar
- Waiting Work
- Blocked Work
- Completed Work
- Work Detail
- AI Suggested Next Steps

Primary question:
What needs to happen next?

### Calendar

Purpose:
Show schedule commitments without overwhelming the user.

Core screens:

- Today
- Tomorrow
- This Week
- Event Detail

Primary question:
What is happening and what might be at risk?

### Documents

Purpose:
Store, organize, and retrieve business knowledge and operating documents.

Core screens:

- Document Library
- Document Detail
- Categories
- Search Results
- AI Summary

Primary question:
Where is the information I need?

### Reporting

Purpose:
Explain trends and support decisions.

Core screens:

- Report Overview
- Revenue
- Customers
- Operations
- Team Capacity
- Growth
- AI Trend Explanation

Primary question:
What decision should I make from this data?

### Harbor AI

Purpose:
Provide proactive business insight and explain what matters.

Core screens:

- AI Brief
- Insights
- Suggested Actions
- Ask Harbor AI
- AI History

Primary question:
What is Harbor AI seeing that I might miss?

### Settings

Purpose:
Control account setup, access, preferences, and integrations.

Core screens:

- Account
- Users
- Roles
- Permissions
- Integrations
- Notifications
- Billing

Primary question:
How is Harbor Vault configured for this business?

## Key Relationships

```text
Organization has many People
Organization has many Work items
Organization has many Documents
Organization has many Locations
Organization has many Notes
Organization has many Activity events

Person can belong to one or many Organizations
Person can be assigned to Work

Work belongs to an Organization
Work can have People assigned
Work can have Documents
Work can have Calendar events
Work can have Activity events

Document can belong to an Organization
Document can belong to Work
Document can be summarized by Harbor AI

Insight can reference Organizations, People, Work, Documents, Reports, or Activity
```

## Global Search

Search should be available from every module.

Search should include:

- Organizations
- People
- Work
- Calendar events
- Documents
- Reports
- Invoices later
- Notes
- AI insights

Search should understand intent, not just keywords.

## Notification Model

Notifications should prioritize what matters.

Avoid notification volume.

Prefer:

- Needs attention
- At risk
- Blocked
- Waiting on someone
- Decision needed
- Important change

## Foundation Boundaries

Included in the Foundation:

- Dashboard
- Organizations
- People
- Work
- Documents
- Reporting snapshots
- Harbor AI brief and insights
- Settings and permissions

Not Included in the Foundation:

- Full invoicing
- Full accounting
- Advanced automations
- Customer portal
- Complex integrations
- Industry specific configuration engines

These can come later if the Foundation proves the Harbor Model.
