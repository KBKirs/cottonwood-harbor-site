# RFC 004 Codex Implementation Brief

## Build Target

Create the Harbor Vault Work module as the canonical operating surface for executable business activity.

## Routes

- `/work`
- `/work/new`
- `/work/:id`
- `/work/:id/activity`
- `/work/:id/comments`
- `/work/:id/documents`
- `/work/:id/relationships`

## Required Components

- WorkListPage
- WorkDetailPage
- WorkHeader
- WorkStatusBadge
- WorkPriorityBadge
- WorkTypeBadge
- WorkFilters
- WorkBoard
- WorkTimeline
- WorkCalendarSnapshot
- WorkTable
- WorkRelationshipList
- WorkActivityFeed
- WorkCommentsPanel
- WorkDocumentsPanel
- WorkAISummary
- WorkEmptyState
- WorkSkeleton

## Suggested Core Entities

- WorkItem
- WorkAssignment
- WorkRelationship
- WorkComment
- WorkActivityEvent
- WorkAttachment
- WorkTag

## Product Rules

- Work is not just tasks.
- Every Work item belongs to one Organization.
- Work supports hierarchy with parentId.
- Work uses one consistent status model.
- Work relationships are first class.
- Work activity must be meaningful and reportable.
- Harbor AI recommendations must explain why.
- Notifications must be curated.

## Statuses

- Backlog
- Planned
- In Progress
- Blocked
- In Review
- Done
- Archived

## Priorities

- Critical
- High
- Medium
- Low

## First Build Target

Build:

1. Work list route.
2. Work detail route.
3. Mock Work data scoped to an Organization.
4. Filters for status, priority, owner, assignee, and due date.
5. Work status and priority badges.
6. Work activity feed placeholder.
7. Harbor AI suggestion placeholder.
8. Empty, loading, and basic permission states.

## Suggested Mock Data Shape

```js
{
  id: "work_001",
  organizationId: "org_001",
  parentId: null,
  type: "Project",
  title: "Renew customer service agreement",
  description: "Prepare renewal package and schedule review call.",
  ownerId: "user_001",
  assigneeIds: ["user_002"],
  priority: "High",
  status: "In Progress",
  startDate: "2026-07-06",
  dueDate: "2026-07-15",
  completedAt: null,
  blockedReason: null,
  nextAction: "Draft renewal summary.",
  tags: ["renewal", "customer"],
  createdAt: "2026-07-05T14:00:00Z",
  updatedAt: "2026-07-05T14:00:00Z"
}
```
