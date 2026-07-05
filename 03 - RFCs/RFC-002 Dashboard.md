# RFC 002 Dashboard

Status:
Draft

Owner:
Chief Product and Design Officer

Reviewers:
CEO, Codex Lead Engineer

Depends on:
RFC 001 Harbor Model

## Summary

The Harbor Vault Dashboard is the command center of the product.

It should answer one question immediately:

What needs attention today?

The Dashboard is not a generic analytics page. It is a decision screen that helps business leaders, managers, and team members understand what changed, what matters, and what should happen next.

## Problem Statement

Most dashboards show reports. Harbor Vault needs a decision screen that immediately tells users what needs attention.

When a user logs into Harbor Vault, the Dashboard should help them understand:

- What needs attention?
- What changed recently?
- What Work is overdue or blocked?
- What is scheduled soon?
- Where are the risks?
- What should I do next?

The Dashboard should reduce cognitive load, not add to it.

## Design Philosophy

The Dashboard should feel like sitting in the captain's chair of the business.

It should be:

- Calm
- Clear
- Prioritized
- Operational
- Trustworthy
- AI assisted
- Action oriented

It should not feel like:

- A data dump
- A traditional CRM homepage
- A wall of charts
- A notification feed
- A task list with too many items

## Goals

- Make the Dashboard the user's daily command center.
- Put the Harbor AI Brief at the center of the experience.
- Show only the KPIs and signals that help users decide what to do next.
- Define every initial widget, data need, and state.
- Keep the mobile Dashboard intentionally simpler than desktop.

## Non Goals

- Build a full reporting suite.
- Show every metric.
- Create a chatbot first interface.
- Build fully customizable widgets in the Foundation.
- Expose restricted information through summaries or AI briefings.

## User Stories

- As an owner, I want to know what needs my attention immediately after logging in.
- As a manager, I want to see risks, blocked Work, and schedule pressure.
- As a team member, I want to know what to focus on today.
- As a viewer, I want a read-only summary that respects my role.

## Primary Dashboard Sections

The initial Dashboard should include:

1. Harbor AI Brief
2. KPI Summary Cards
3. Priority Work
4. Business Health
5. Calendar Snapshot
6. Recent Meaningful Activity
7. Alerts and Risks

## UI Direction Or Mockup Notes

Recommended desktop order:

1. Top bar with search, notifications, and create action.
2. Sidebar navigation.
3. Harbor AI Brief.
4. KPI Summary Cards.
5. Priority Work with Business Health and Calendar Snapshot.
6. Recent Meaningful Activity.
7. Alerts and Risks.

Recommended mobile order:

1. Harbor AI Brief.
2. Priority Work.
3. Alerts and Risks.
4. Today and Calendar.
5. KPI Cards.
6. Activity.

Mobile should emphasize action over reporting. It should not be a compressed desktop dashboard.

## Harbor AI Brief

Purpose:
The Harbor AI Brief is the centerpiece of the Dashboard. It summarizes what matters today in plain language.

Example:
Good morning. Three Work items need attention today. Two are overdue, one customer relationship shows declining activity, and revenue is tracking ahead of last month. Start with blocked Work before creating anything new.

Requirements:

- Greeting.
- Summary of urgent items.
- Notable changes.
- Risks.
- Recommended next action.
- Link to ask Harbor AI a follow up.

Initial Foundation behavior:

- If overdue Work is greater than zero, mention overdue Work.
- If blocked Work is greater than zero, mention blocked Work.
- If today's calendar has items, mention schedule.
- If no data exists, show onboarding guidance.

The first version can be rule based before real AI is implemented.

## KPI Summary Cards

KPI cards should summarize business state at a glance.

Do not show more than six cards initially.

Recommended cards:

1. Open Work
2. Overdue Work
3. Organizations
4. Upcoming Schedule
5. Documents Added
6. Business Health

Each card should include:

- Label.
- Primary value.
- Short context line.
- Trend or status indicator.
- Click target to the related module.

Avoid:

- Vanity metrics.
- Charts inside every card.
- Too many colors.
- Metrics without a next action.

## Priority Work

Priority Work shows the most important Work items requiring attention.

It is not a full task list.

Show items that are:

- Overdue.
- Due today.
- Blocked.
- High priority.
- Waiting on response.
- Assigned to the current user.
- Recently changed.

Each row should show:

- Work title.
- Related Organization.
- Owner or assignee.
- Status.
- Priority.
- Due date.
- Quick action.

Recommended status badges:

- New
- Planned
- In Progress
- Waiting
- Blocked
- Completed
- Cancelled

Recommended priority levels:

- Low
- Normal
- High
- Critical

Empty state:
No priority Work right now. When Work becomes overdue, blocked, or due soon, it will appear here.

## Business Health

Business Health gives an at-a-glance assessment of important operating areas.

Initial health categories:

- Operations
- Customers
- Workload
- Cash Flow placeholder
- Growth placeholder

Status levels:

- Healthy
- Watch
- Needs Attention

Rule based examples:

- Operations is Healthy if blocked Work equals zero and overdue Work is less than three.
- Operations is Watch if overdue Work is three or more.
- Operations is Needs Attention if blocked Work is three or more or overdue Work is ten or more.
- Customers is Healthy if no Organizations have stale activity.
- Customers is Watch if some Organizations have no recent activity.
- Customers is Needs Attention if high-value Organizations have no follow up.

Use calm status indicators. Avoid making the Dashboard feel alarming unless action is truly needed.

## Calendar Snapshot

The Calendar Snapshot shows near-term scheduled activity.

Initial views:

- Today
- Tomorrow
- This Week

Fields:

- Event title.
- Time.
- Related Organization.
- Related Work item.
- Owner.

Empty state:
Nothing scheduled today. Use the Calendar to plan upcoming Work.

## Recent Meaningful Activity

Activity should help users understand what changed.

It should not log every click.

Include:

- Work created.
- Work completed.
- Work blocked.
- Organization added.
- Important note added.
- Document added.
- Schedule changed.
- Report threshold crossed.
- AI risk detected.

Exclude:

- Page views.
- Tab clicks.
- Basic record opens.
- Minor edits unless important.

Activity row fields:

- Event description.
- Related object.
- User or system.
- Timestamp.
- Link to detail.

## Alerts and Risks

Alerts should surface issues requiring attention.

Initial alert types:

- Overdue Work.
- Blocked Work.
- Missing follow up.
- Upcoming deadline.
- Stale Organization activity.
- Failed automation placeholder.
- AI detected risk placeholder.

Alert severity:

- Info
- Watch
- Warning
- Critical

Alerts must be actionable.

Bad alert:
Something changed.

Good alert:
Northpoint Group has no follow up scheduled after last week's renewal conversation.

## Global Search

The Dashboard top bar should include global search.

Search should eventually support:

- Organizations
- People
- Work
- Documents
- Notes
- Reports
- AI questions

Initial placeholder is acceptable if search infrastructure is not ready.

## Create Button

The top bar should include a primary create action.

Initial create options:

- New Organization
- New Person
- New Work
- Upload Document
- Add Note

The primary default should likely be New Work.

## Notifications

Notifications should be curated.

Do not create a noisy notification center.

Notification philosophy:

Show the few things that matter, not everything that happened.

Initial notification types:

- Assigned Work.
- Due soon.
- Overdue.
- Mentioned in note.
- Important update.
- AI alert placeholder.

## Personalization

Initial Dashboard personalization should be limited.

Do not overbuild.

Foundation should support role-aware content:

- Owner sees business-wide view.
- Administrator sees business-wide management view.
- Manager sees team and Work view.
- Team Member sees assigned Work.
- Viewer sees read-only summary.

Custom widgets can wait.

## Workflow

User logs in, reads the Harbor AI Brief, reviews Priority Work, checks Business Health, reviews schedule and alerts, then takes the next recommended action.

## Permissions

Dashboard data should respect user access.

A user should only see:

- Organizations they have access to.
- Work they can view.
- Documents they can access.
- Reports allowed by role.
- AI summaries based only on records they can access.

Do not expose restricted information in summaries, KPI details, notifications, or AI briefings.

## Empty State Experience

If a new account has no data, the Dashboard should guide onboarding.

Recommended first-run state:

Welcome to Harbor Vault.

Start by adding your first Organization. From there, you can connect People, track Work, store Documents, and begin building a clearer operating picture for your business.

Primary CTA:

- Add Organization.

Secondary CTAs:

- Create Work.
- Upload Document.
- Explore Demo Data.

## Loading State

Dashboard loading states should use skeleton cards.

Avoid blank white screens.

Recommended loading order:

1. App shell.
2. Harbor AI Brief skeleton.
3. KPI skeletons.
4. Work and activity skeletons.

## Error State

If Dashboard data fails to load, show:

We could not load the Dashboard.

Your data is safe. Please refresh the page or try again in a moment.

Include:

- Retry button.
- Support link later.
- Error logging for implementation.

## Data Model Implications

Dashboard needs access to:

- organizations
- people
- work_items
- work_assignments
- documents
- notes
- events
- calendar_events
- insights
- users

Initial derived metrics:

- total open Work
- overdue Work count
- blocked Work count
- due today count
- Organizations count
- recent activity
- upcoming events
- documents added recently

## Suggested API And Data Fetching

Initial endpoint concept:

```text
GET /api/dashboard/summary
```

Response should include:

- aiBrief
- kpis
- priorityWork
- businessHealth
- calendarSnapshot
- activity
- alerts

This keeps the UI simple and avoids many separate client requests.

## Component Structure

Recommended components:

```text
DashboardPage
DashboardHeader
HarborAIBrief
KpiCard
KpiGrid
PriorityWorkPanel
BusinessHealthPanel
CalendarSnapshot
ActivityFeed
AlertsPanel
DashboardEmptyState
DashboardSkeleton
```

## Harbor AI Behavior

Harbor AI should proactively summarize:

- What needs attention.
- What changed since yesterday.
- Where risks exist.
- What to do next.

Harbor AI must respect permissions and should never summarize inaccessible records.

## Copy Standards

Use calm, direct language.

Preferred words:

- Attention
- Priority
- Review
- Clear
- Ready
- Waiting
- Blocked
- Healthy
- Watch

Avoid:

- Explosive growth
- Revolutionary
- Disruptive
- Game changing
- Supercharged

## Visual Design Notes

Use the Cottonwood Harbor design system:

- Deep Teal for primary structure and navigation.
- Rich Copper sparingly for priority, AI, and calls to action.
- Warm Cream for page background.
- Charcoal for primary text.
- White cards with subtle borders.

Copper should not be overused.

Dashboard should feel premium, calm, and operational.

## Accessibility Requirements

Dashboard must support:

- Keyboard navigation.
- Visible focus states.
- Semantic headings.
- Descriptive button labels.
- Sufficient contrast.
- Non-color-only status indicators.
- ARIA labels where needed.
- Reduced motion where applicable.

Status badges must include text, not just color.

## SEO

Dashboard is an authenticated app screen and does not require public SEO.

However:

- Page title should be meaningful.
- Metadata should not expose private data.
- Authenticated pages should not be indexed.

Recommended title:

```text
Dashboard | Harbor Vault
```

## Analytics

Track only meaningful product events:

- Dashboard viewed.
- AI Brief expanded.
- Priority Work clicked.
- Alert clicked.
- Create action opened.
- Search used.

Avoid invasive tracking.

## Future Considerations

- Dashboard widgets may become configurable after the Foundation.
- Harbor AI Brief can become fully AI generated after enough data and permission controls exist.
- Reports and Insights naming should be revisited after RFC 008.
- Demo data may help first-time users understand the Dashboard before real data exists.

## Founder Review Questions

1. Should Harbor AI Brief be the most prominent section?
2. Are six KPI cards too many, too few, or right?
3. Should Business Health be included in the first build?
4. Should Dashboard default to company-wide or user-specific?
5. Should Alerts and Priority Work be separate panels or combined?
6. Should Reports eventually be renamed Insights?
7. Should the first version include demo data?

## Related Decisions

- D-011 Dashboard is a decision screen, not a reporting page.
- D-012 Harbor AI Brief is the Dashboard centerpiece.
- D-013 Priority Work replaces a generic task list.
- D-014 Activity feed tracks meaningful events only.
- D-015 Dashboard starts role-aware, not fully customizable.

## Acceptance Criteria

- Dashboard purpose is clear.
- Dashboard answers: What needs attention today?
- Harbor AI Brief is visible without extra clicks.
- KPI cards are limited to six.
- All widgets have defined purpose and data needs.
- Empty, loading, and error states are defined.
- Activity feed shows meaningful events only.
- Mobile Dashboard is not just compressed desktop.
- Dashboard respects the Harbor Model.
- Dashboard respects role permissions.
- Codex can build the first Dashboard route from this RFC.
