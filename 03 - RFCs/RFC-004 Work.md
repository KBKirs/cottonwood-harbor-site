# RFC 004 Work

Status:
Draft

Version:
1.0

Owner:
Chief Product and Design Officer

Reviewers:
CEO, Codex Lead Engineer

Depends on:
RFC 001 Harbor Model, RFC 002 Dashboard, RFC 003 Organizations

## Summary

Work is the canonical model for all executable activity inside Harbor Vault.

Harbor Vault should not treat Work as simple tasks. Work is the flexible operating object that can represent anything from a small follow up to a large multi-phase initiative.

Everything that needs to be planned, assigned, tracked, completed, reviewed, blocked, reported on, or improved should be represented as Work.

## Problem Statement

Terms like task, job, ticket, project, issue, and case are too narrow.

Different industries use different language for the same basic business need: something must happen, someone must own it, progress must be visible, and the business must know what to do next.

Harbor Vault needs one durable Work model that can support many industries without creating separate systems for tasks, jobs, projects, service calls, inspections, renewals, onboarding, and initiatives.

## Purpose

Define what Work means in Harbor Vault.

All actionable items are represented as Work objects.

Work is where Harbor Vault becomes a Business Operating System rather than only an Organization management platform.

## Goals

- Define Work as the universal operating object.
- Support simple to-do items and larger multi-phase initiatives.
- Keep Work tied to one Organization.
- Support hierarchical Work.
- Define a consistent lifecycle.
- Define common fields shared by all Work items.
- Support relationships, reporting, activity, notifications, and AI guidance.
- Give Codex a buildable model for routes, components, APIs, and database planning.

## Non Goals

- Build a complex project management suite in the Foundation.
- Build full Gantt planning in the Foundation.
- Build custom workflow automation before validation.
- Build industry-specific Work objects in the Foundation.
- Replace future RFCs for Calendar, Notifications, Reporting, AI, or API contracts.

## Core Principles

### Principle 1 Work Is Hierarchical

Work can be nested so a business can represent small tasks and larger bodies of work with one model.

Recommended hierarchy:

```text
Initiative
  Project
    Epic optional
      Task
        Subtask
```

Foundation can support `parentId` immediately even if the interface starts with simpler Work views.

### Principle 2 Work Belongs To One Organization

Every Work item belongs to exactly one Organization.

Work inherits Organization context, permissions, AI boundaries, reporting scope, search scope, and activity scope.

### Principle 3 Work Has A Lifecycle

Every Work item has one status from a consistent status model.

Lifecycle clarity is more important than industry-specific labels.

### Principle 4 Work Can Have Relationships

Work items can depend on, block, relate to, duplicate, or originate from other Work items.

Relationships should help users understand impact and sequence.

### Principle 5 Work Is Observable And Reportable

Work should produce activity, status history, assignments, notifications, reports, and AI insights.

If Work cannot be observed, the business cannot manage it.

## User Stories

- As an owner, I want a single view of important Work across the business.
- As a manager, I want to see blocked, active, overdue, and completed Work.
- As a team member, I want to know what is assigned to me and what is due today.
- As an administrator, I want Work to remain scoped to the correct Organization.
- As a leader, I want Work data to power Dashboard, Reporting, Calendar, and Harbor AI insights.

## Work Hierarchy

### Initiative

An Initiative is a broad strategic body of Work.

Examples:

- Launch a new service line.
- Improve customer onboarding.
- Reduce overdue renewals.

### Project

A Project is a planned body of Work with a clear outcome.

Examples:

- Install a new system.
- Implement a customer process.
- Complete a facility upgrade.

### Epic Optional

An Epic groups related Tasks inside larger Projects.

Epics are optional and may be hidden in Foundation if not needed.

### Task

A Task is a concrete unit of Work that can be assigned and completed.

### Subtask

A Subtask is a smaller step within a Task.

Subtasks may be deferred if checklist behavior is enough for Foundation.

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

Type should describe the kind of Work.

Hierarchy should describe where the Work sits.

Do not hard-code industry-specific behavior into type unless validated.

## Work Object

Common fields shared by all Work items:

- id
- organizationId
- parentId
- type
- title
- description
- ownerId
- assigneeIds
- priority
- status
- startDate
- dueDate
- completedAt
- blockedReason
- nextAction
- tags
- createdAt
- updatedAt

Future or optional fields:

- estimate
- effort
- progress
- teamId
- projectId derived from hierarchy
- locationId
- externalReference
- recurringRule
- templateId

## Status Model

Keep Work statuses simple and consistent.

Initial statuses:

- Backlog
- Planned
- In Progress
- Blocked
- In Review
- Done
- Archived

Status notes:

- Backlog means captured but not scheduled or committed.
- Planned means accepted and expected to happen.
- In Progress means actively being worked.
- Blocked means unable to move forward without action.
- In Review means completed work is waiting for approval, validation, or handoff.
- Done means completed and available for history, reports, and AI summaries.
- Archived means no longer active but preserved.

## Priority Model

Initial priorities:

- Critical
- High
- Medium
- Low

Priority should answer: how urgently should this receive attention?

Harbor AI may recommend priority changes, but the reason must be visible.

## Relationships

Work items can:

- Depend on another Work item.
- Block another Work item.
- Relate to another Work item.
- Duplicate another Work item.
- Originate from another record.

Relationship fields:

- sourceWorkId
- targetWorkId
- relationshipType
- createdBy
- createdAt

Relationship types:

- depends_on
- blocks
- relates_to
- duplicates
- originated_from

## Core Screens And Views

### Work List

Purpose:
Show Work that needs attention in a scannable format.

Should support:

- My Work.
- Team Work.
- Organization Work.
- Priority Work.
- Blocked Work.
- Overdue Work.

### Work Board

Purpose:
Show Work by status using a Kanban-style board.

Columns should map to the status model.

### Work Timeline

Purpose:
Show Work across time and milestones.

Useful for larger Projects and Initiatives.

### Work Calendar

Purpose:
Show Work tied to dates without becoming a full calendar product.

Foundation views:

- Today.
- Tomorrow.
- This Week.

### Work Table

Purpose:
Support power users who need sortable, filterable operational data.

### Gantt Future

Gantt is a future view.

Do not build in Foundation unless validated.

### Work Detail

Purpose:
Show the full context and next action for one Work item.

Should show:

- Title.
- Organization.
- Parent Work.
- Child Work.
- Type.
- Status.
- Priority.
- Owner.
- Assignees.
- Due date.
- Description.
- Next action.
- Relationships.
- Related Documents.
- Comments.
- Activity.
- Harbor AI suggestions.

## Filtering And Search

Standard filters:

- Organization.
- Owner.
- Assignee.
- Status.
- Priority.
- Tag.
- Due date.
- Team.
- Type.
- Parent Project or Initiative.
- Blocked.
- Overdue.

Search should support:

- Work title.
- Description.
- Organization.
- Assignee.
- Tags.
- Notes and comments later.
- AI intent later.

## Activity Model

Every Work item records meaningful activity.

Activity includes:

- Comments.
- Edits.
- Status changes.
- Priority changes.
- Assignment changes.
- Due date changes.
- Relationship changes.
- AI actions.
- Attachments.
- Completion.
- Archive.

Avoid noisy activity such as page views or tab clicks.

## Comments And Updates

Work should support comments or updates so teams can preserve context.

Comments may include:

- Plain text.
- Mentions.
- Attachments later.
- AI generated summaries later.

## Attachments And Documents

Work can attach or link Documents.

Documents remain part of Knowledge and should inherit Organization permissions.

Work should not become a document repository.

## Notifications

Events that may generate notifications:

- Assignment.
- Mention.
- Due soon.
- Overdue.
- Completion.
- Blocked.
- Comment.
- Review requested.
- Status changed if important.

Notifications must be curated.

Do not notify users about every edit.

## Permissions

Work visibility is Organization scoped and role aware.

General rules:

- Owners and Administrators can see all Work in the Organization.
- Managers can see team Work.
- Team Members can see assigned or relevant Work.
- Viewers can see read-only Work allowed by role.
- External portal users later may see shared Work only.

Harbor AI must not summarize Work the user cannot access.

## Data Model Implications

Core tables or collections:

- work_items
- work_assignments
- work_relationships
- work_comments
- work_activity_events
- work_attachments
- work_tags

Every Work table should include organizationId or join only through an Organization-scoped Work item.

## Suggested API And Data Fetching

Initial endpoint concepts:

```text
GET /api/work
POST /api/work
GET /api/work/:id
PATCH /api/work/:id
POST /api/work/:id/comments
POST /api/work/:id/relationships
GET /api/work/:id/activity
```

Common query parameters:

- organizationId
- ownerId
- assigneeId
- status
- priority
- type
- tag
- dueBefore
- dueAfter
- blocked
- overdue

## Harbor AI Behavior

Harbor AI can:

- Create Work from user input.
- Summarize Work.
- Estimate effort.
- Identify blockers.
- Recommend priorities.
- Suggest dependencies.
- Generate updates.
- Draft status summaries.
- Identify Work without owners.
- Identify overdue Work.
- Explain risk.
- Recommend next actions.

Example:

This renewal is due in four days, but no owner is assigned. Assign an owner or move it to Blocked with a clear reason.

AI recommendations must explain why they were made.

## Reporting And Insights

Work should power:

- Open Work count.
- Overdue Work count.
- Blocked Work count.
- Work by status.
- Work by owner.
- Work by Organization.
- Work aging.
- Completion trends.
- Capacity signals later.
- Business Health signals.

## Empty State Experience

If no Work exists, show:

No Work yet.

Create your first Work item to start tracking what needs to happen, who owns it, and what should happen next.

Primary CTA:

- Create Work.

Secondary CTA:

- Add Organization.

## Loading State

Use skeleton rows or cards.

Avoid blank Work views.

## Error State

If Work fails to load, show:

We could not load Work.

Your data is safe. Please refresh the page or try again in a moment.

Include a retry action.

## Mobile Behavior

Mobile Work should prioritize:

1. My Work.
2. High Priority.
3. Blocked.
4. Due Today.
5. Waiting through filters if needed.

Do not compress every desktop view into mobile.

## Future Considerations

- Custom Work types.
- Recurring Work.
- Checklist steps.
- Templates and playbooks.
- Workflow automation.
- Gantt view.
- Capacity planning.
- Time tracking.
- Service-specific Work extensions.
- Customer portal Work sharing.

## Open Questions

- Should Epic be visible in Foundation or reserved for larger accounts?
- Should Subtasks be true Work items or checklist items?
- Should every Work item require an Organization?
- Should every Work item require a next action?
- Should Work support recurring rules in Foundation?
- Should Work support templates in Foundation?
- Should Work status be customizable later?

## Related Decisions

- D-008 Work is the universal operational object.
- D-019 Work is hierarchical.
- D-020 Work uses one consistent lifecycle.
- D-021 Work relationships are first class.
- D-022 Work activity should be observable and reportable.

## Acceptance Criteria

- Work is defined as the canonical model for executable activity.
- Work can represent simple tasks and large initiatives.
- Every Work item belongs to exactly one Organization.
- Work supports parent-child hierarchy through parentId.
- Work supports the statuses Backlog, Planned, In Progress, Blocked, In Review, Done, and Archived.
- Work supports the priorities Critical, High, Medium, and Low.
- Work can have relationships including depends on, blocks, relates to, duplicates, and originated from.
- Work can be viewed in List, Board, Timeline, Calendar, and Table views, with Gantt deferred.
- Work supports filtering by owner, assignee, status, priority, tag, due date, team, type, and parent.
- Work records comments, edits, status changes, assignments, AI actions, and attachments as activity.
- Harbor AI can summarize Work, identify blockers, recommend priorities, suggest dependencies, and generate updates.
- Notifications are generated for meaningful Work events only.
- Work respects Organization context and role permissions.
- Codex can build the first Work route, Work list, Work detail, and supporting mock data from this RFC.
