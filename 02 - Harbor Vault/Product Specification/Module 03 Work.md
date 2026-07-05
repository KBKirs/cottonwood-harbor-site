# Harbor Vault Product Specification

Phase 2A

Module 3 Work

Canonical build reference:
RFC 004 Work

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

Work is hierarchical and can represent small tasks or large initiatives using one model.

Recommended hierarchy:

```text
Initiative
  Project
    Epic optional
      Task
        Subtask
```

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

### Work Waiting On Others

Purpose:
Show Work that cannot move because the team is waiting on someone or something.

Waiting should be captured as a blocker reason, tag, or comment unless a future RFC adds a separate status.

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

### Done Work

Purpose:
Show recently completed Work and support history.

Should show:

- Done date
- Organization
- Owner
- Outcome
- Related documents

## Work Types

Initial Work types:

- Initiative
- Project
- Epic
- Task
- Subtask
- Service Call
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

- Backlog
- Planned
- In Progress
- Blocked
- In Review
- Done
- Archived

## Work Priorities

Initial priorities:

- Critical
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
- Link related Work
- Mark blocked
- Move to review
- Complete Work
- Ask Harbor AI for next steps

## Work Relationships

Work items can:

- Depend on another Work item
- Block another Work item
- Relate to another Work item
- Duplicate another Work item
- Originate from another record

## Work Views

Supported views:

- List
- Board
- Timeline
- Calendar
- Table

Future:

- Gantt

## Activity

Every Work item records meaningful activity:

- Comments
- Edits
- Status changes
- Assignments
- AI actions
- Attachments
- Relationship changes

Do not show low value noise.

## Notifications

Events that may generate notifications:

- Assignment
- Mention
- Due soon
- Overdue
- Completion
- Blocked
- Comment
- Review requested

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
This renewal is due in four days, but no owner is assigned. Assign an owner or move it to Blocked with a clear reason.
```

## Mobile Behavior

Mobile Work should prioritize:

1. My Work
2. High Priority
3. Blocked
4. In Review
5. Due Today

## Open Questions

- Should Work support custom types in Foundation?
- Should recurring Work be Included in the Foundation?
- Should Work have subtasks or checklist items?
- Should Work require an Organization?
- Should every Work item require a next action?
- Should Epic be visible in Foundation or reserved for larger accounts?
