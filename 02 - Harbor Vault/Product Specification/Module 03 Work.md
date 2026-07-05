# Harbor Vault Product Specification

Phase 2A

Module 3 Work

## Purpose

Harbor Vault should use Work as the universal operating concept.

Do not call it Tasks.

Do not call it Jobs.

Do not call it Projects.

Work can become many things across many industries:

- Service call
- Project
- Estimate
- Installation
- Inspection
- Renewal
- Onboarding
- Follow up
- Issue

One system.

Many industries.

## Primary Question

What needs to happen next?

## Work Definition

Work is anything that needs to be planned, tracked, completed, renewed, resolved, or followed up.

Every Work item should belong to an Organization.

## Core Screens

### Active Work

Purpose:
Show the work currently moving through the business.

Should show:

- Work title
- Organization
- Type
- Status
- Priority
- Owner
- Due date
- Next action
- Risk indicator

### Work Detail

Purpose:
Show the full context and next action for one Work item.

Should show:

- Title
- Organization
- Type
- Status
- Priority
- Owner
- Assigned people
- Due date
- Description
- Next action
- Related documents
- Notes
- Activity
- Harbor AI suggestions

### Work Calendar

Purpose:
Show schedule based Work without becoming a full calendar product.

Views:

- Today
- Tomorrow
- This Week

### Waiting Work

Purpose:
Show work that cannot move because the team is waiting on someone or something.

Examples:

- Waiting on customer
- Waiting on approval
- Waiting on document
- Waiting on payment later
- Waiting on internal decision

### Blocked Work

Purpose:
Show work at risk.

Blocked work should always have:

- Blocker reason
- Responsible person
- Date blocked
- Suggested next action

### Completed Work

Purpose:
Show recently completed work and support history.

Should show:

- Completed date
- Organization
- Owner
- Outcome
- Related documents

## Work Types

Initial Work types:

- Service Call
- Project
- Estimate
- Installation
- Inspection
- Renewal
- Onboarding
- Follow Up
- Issue
- General

## Work Statuses

Initial statuses:

- New
- Active
- Waiting
- Blocked
- Completed
- Canceled

## Work Priorities

Initial priorities:

- High
- Medium
- Low

Harbor AI may recommend priority changes, but the user should understand why.

## User Actions

Users can:

- Create Work
- Assign Work
- Change status
- Change priority
- Add due date
- Add note
- Attach document
- Link Organization
- Link People
- Mark blocked
- Mark waiting
- Complete Work
- Ask Harbor AI for next steps

## Harbor AI Behavior

Harbor AI should:

- Suggest next steps
- Identify overdue Work
- Identify blocked patterns
- Identify work without owners
- Summarize Work status
- Recommend priority changes
- Explain risks

Example:

```text
This renewal is due in four days, but no owner is assigned. Assign an owner or move it to Waiting with a reason.
```

## Mobile Behavior

Mobile Work should prioritize:

1. My Work
2. High Priority
3. Blocked
4. Waiting
5. Due Today

## Open Questions

- Should Work support custom types in Foundation?
- Should recurring Work be Included in the Foundation?
- Should Work have subtasks or checklist items?
- Should Work require an Organization?
- Should every Work item require a next action?
