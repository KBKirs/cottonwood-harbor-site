# Harbor Vault Database Support Model

Phase 2A

## Purpose

The database should support the product.

The database should not define the product.

This document captures the early data model implied by the Harbor Model and MVP blueprint.

## Core Objects

Initial core objects:

- Account
- User
- Role
- Organization
- Person
- Work
- Document
- Note
- Activity
- Insight
- Calendar Event

## Object Relationships

```text
Account has many Users
Account has many Organizations
Account has many People
Account has many Work items
Account has many Documents

Organization has many People
Organization has many Work items
Organization has many Documents
Organization has many Notes
Organization has many Activity events
Organization has many Insights

Person belongs to Account
Person can belong to one or more Organizations
Person can be assigned to Work

Work belongs to Organization
Work can have assigned People
Work can have Documents
Work can have Notes
Work can have Activity events
Work can have Insights

Document can belong to Organization
Document can belong to Work
Document can have AI summaries

Insight can reference Organization, Person, Work, Document, Report, or Activity
```

## Initial Tables

### accounts

- id
- name
- status
- created_at
- updated_at

### users

- id
- account_id
- name
- email
- role_id
- status
- created_at
- updated_at

### roles

- id
- account_id
- name
- permissions
- created_at
- updated_at

### organizations

- id
- account_id
- name
- type
- status
- primary_contact_id
- owner_user_id
- business_health_status
- ai_summary
- last_activity_at
- created_at
- updated_at

### people

- id
- account_id
- organization_id
- name
- email
- phone
- role_title
- is_primary_contact
- is_decision_maker
- created_at
- updated_at

### work_items

- id
- account_id
- organization_id
- title
- type
- status
- priority
- owner_user_id
- due_at
- next_action
- description
- created_at
- updated_at

### documents

- id
- account_id
- organization_id
- work_item_id
- title
- category
- visibility
- file_url
- ai_summary
- created_at
- updated_at

### notes

- id
- account_id
- organization_id
- work_item_id
- person_id
- author_user_id
- body
- visibility
- created_at
- updated_at

### activity_events

- id
- account_id
- organization_id
- work_item_id
- person_id
- event_type
- summary
- importance
- created_at

### insights

- id
- account_id
- subject_type
- subject_id
- insight_type
- summary
- recommendation
- confidence
- status
- created_at
- updated_at

### calendar_events

- id
- account_id
- organization_id
- work_item_id
- title
- starts_at
- ends_at
- status
- created_at
- updated_at

## Database Principles

- Every record belongs to an Account.
- Organizations are the primary relationship anchor.
- Work should belong to an Organization.
- Harbor AI insights should reference real records.
- Permissions must be enforced at query and AI context levels.
- Activity should capture meaningful events, not noise.

## MVP Data Questions

- Should people support many to many Organization relationships in MVP?
- Should documents require a file upload or support external links?
- Should AI summaries be stored, generated live, or both?
- Should activity events be generated automatically from all changes or only meaningful changes?
- Should Work support recurrence in MVP?
