# RFC 004 Work

Status:
Draft

Owner:
Chief Product and Design Officer

Reviewers:
CEO, Codex Lead Engineer

## Problem Statement

Terms like tasks, jobs, and projects are too narrow. Harbor Vault needs one flexible concept that can support many industries.

## Goals

- Use Work as the universal operating object.
- Support many work types without redesigning the system.
- Keep every Work item focused on next action.
- Connect Work to Organizations.

## Non Goals

- Build a complex project management tool in Foundation.
- Build industry specific workflows in Foundation.
- Build full recurring automation before validation.

## User Stories

- As an owner, I want a single view of important work across the business.
- As a manager, I want to see blocked, waiting, active, and completed work.
- As an employee, I want to know what is assigned to me and what is due today.

## UI Direction Or Mockup Notes

Core Work views:

- Active
- Calendar
- Waiting
- Blocked
- Completed
- Work Detail

## Workflow

User creates Work under an Organization, assigns owner, sets priority and due date, updates status, and uses Harbor AI for suggested next steps.

## Permissions

Employees may only see assigned or relevant Work. Managers can see team Work. Owners and Administrators can see all Work.

## Data Model Implications

Work should include:

- Organization
- Type
- Status
- Priority
- Owner
- Assigned people
- Due date
- Next action
- Notes
- Documents
- Activity

## Harbor AI Behavior

Harbor AI should identify overdue Work, blocked Work, missing owners, priority concerns, and recommended next actions.

## Future Considerations

- Custom Work types
- Recurring Work
- Checklist steps
- Templates and playbooks

## Acceptance Criteria

- Work can represent multiple business activities.
- Work belongs to an Organization.
- Work has a clear status and next action.
- Harbor AI can suggest next steps.
