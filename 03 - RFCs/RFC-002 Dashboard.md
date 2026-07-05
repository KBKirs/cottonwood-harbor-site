# RFC 002 Dashboard

Status:
Draft

Owner:
Chief Product and Design Officer

Reviewers:
CEO, Codex Lead Engineer

## Problem Statement

Most dashboards show reports. Harbor Vault needs a decision screen that immediately tells users what needs attention.

## Goals

- Make the Dashboard the user's daily command center.
- Put the Harbor AI Brief at the center of the experience.
- Show only the KPIs and signals that help users decide what to do next.
- Keep the mobile dashboard intentionally simpler than desktop.

## Non Goals

- Build a full reporting suite.
- Show every metric.
- Create a chatbot first interface.

## User Stories

- As an owner, I want to know what needs my attention immediately after logging in.
- As a manager, I want to see risks, blocked work, and schedule pressure.
- As an employee, I want to know what to focus on today.

## UI Direction Or Mockup Notes

Desktop order:

1. Top navigation
2. Sidebar
3. Harbor AI Brief
4. KPI Cards
5. Today's Work and Calendar
6. Business Health and Activity Feed
7. Reports Snapshot

Mobile order:

1. AI Brief
2. Today's Work
3. Alerts
4. KPIs

## Workflow

User logs in, reads the AI Brief, reviews priority work, checks business health, and takes the next recommended action.

## Permissions

Financial KPIs and sensitive AI insights should respect role permissions.

## Data Model Implications

Dashboard needs access to:

- Organizations
- Work
- Calendar events
- Activity
- Insights
- Reports
- Documents

## Harbor AI Behavior

Harbor AI should proactively summarize:

- What needs attention
- What changed since yesterday
- Where risks exist
- What to do next

## Future Considerations

Dashboard widgets may become configurable after the MVP.

## Acceptance Criteria

- Dashboard answers "What should I do next?"
- Harbor AI Brief is visible without extra clicks.
- KPI cards are limited to six.
- Activity feed shows meaningful events only.
- Mobile dashboard is not just compressed desktop.
