# Harbor Vault Product Specification

Phase 2A

Module 1 Dashboard

Canonical build reference:
RFC 002 Dashboard

## Dashboard Purpose

When someone logs into Harbor Vault, they should immediately know:

- What needs my attention?
- What changed since yesterday?
- Where are the risks?
- What should I do next?

Not after clicking five menus.

Immediately.

The Dashboard is not a reporting screen.

It is a decision screen.

## Design Philosophy

The Dashboard should feel like sitting down in the captain's chair of your business.

Everything important should be visible.

Nothing unnecessary should compete for attention.

Every part of the Dashboard should help the user decide what to do next.

## Product Rule

Every screen in Harbor Vault should answer one question:

What should I do next?

If a screen does not help users decide their next action, it is probably showing too much information or the wrong information.

## AI Native Architecture

Harbor Vault should be AI native, not AI enhanced.

AI should not be bolted onto the product later. Every screen should be designed with the assumption that an intelligent assistant is available.

Examples:

- Dashboard: Harbor AI Brief
- Customer record: AI generated summary
- Work item: AI suggested next steps
- Reports: AI explains trends in plain language
- Search: AI understands intent, not just keywords

This changes how the product should be designed from the beginning.

## Dashboard Layout

```text
Top Navigation

Sidebar

Dashboard

Harbor AI Brief

KPI Summary Cards

Priority Work     Calendar Snapshot

Business Health   Activity Feed

Alerts and Risks
```

## Harbor AI Brief

The Harbor AI Brief is the centerpiece of the Dashboard.

It is not a chatbot.

It is an executive briefing.

Example:

```text
Good morning, Kevin.

Three customer renewals need attention.

Revenue is ahead of last month.

Two work orders are overdue.

One invoice remains unpaid.

Would you like me to prioritize today's work?
```

This is valuable because it summarizes what matters and points the user toward action.

## KPI Cards

The Dashboard should not show dozens of metrics.

It should show no more than six KPI cards initially:

1. Open Work
2. Overdue Work
3. Organizations
4. Upcoming Schedule
5. Documents Added
6. Business Health

Every card should answer:

Should I care?

## Priority Work

Priority Work should replace the traditional task list.

Instead of showing 100 tasks, it should show the Work items that most need attention:

- Overdue
- Due today
- Blocked
- High priority
- Waiting on response
- Assigned to the current user
- Recently changed

This helps people know where to focus.

## Calendar

The Calendar section should stay intentionally narrow:

- Today's Schedule
- Tomorrow
- This Week

Nothing more.

## Business Health

Business Health is a unique Harbor Vault concept.

It should summarize the health of the business using simple status language:

- Healthy
- Watch
- Needs Attention

Initial status areas:

- Operations
- Customers
- Workload
- Cash Flow
- Growth

Foundation can begin with rule based statuses. AI should eventually determine the status and explain why.

## Activity Feed

Only meaningful activity belongs in the Activity Feed.

Do not show noise such as:

```text
Bob opened customer.
```

Show meaningful events such as:

```text
Northwind proposal approved.
Revenue exceeded weekly goal.
Customer satisfaction increased.
```

## Alerts and Risks

Alerts should surface issues requiring attention.

Initial alert types:

- Overdue Work
- Blocked Work
- Missing follow up
- Upcoming deadline
- Stale Organization activity
- AI detected risk placeholder

Alerts must be actionable.

## Sidebar

The sidebar should be simple.

Initial modules:

- Dashboard
- Organizations
- People
- Work
- Calendar
- Documents
- Reporting
- Harbor AI
- Settings

Nothing else.

## Search

Search should be global.

One search bar should search everything:

- Customers
- People
- Documents
- Work
- Invoices
- Notes
- AI

Search should understand intent, not just keywords.

## Notifications

Notifications should not create noise.

Do not show:

```text
You have 47 notifications.
```

Show:

```text
You have 3 things that matter.
```

## Mobile Dashboard

Mobile is not a compressed desktop dashboard.

Mobile should be a different experience:

1. AI Brief
2. Today's Work
3. Alerts
4. KPIs

Done.

## Color Philosophy

The Harbor Vault interface should be 95 percent neutral.

Copper is reserved for:

- Warnings
- Important actions
- AI

Never overuse copper.

## Harbor AI Behavior

Harbor AI should not wait for questions.

It should proactively surface insights.

Examples:

```text
You've had three customers request schedule changes this week. Would you like to see a pattern?
```

```text
Revenue has increased 14 percent over the last six weeks while overtime costs have also increased. Here are three possible causes.
```

That is not a chatbot.

That is a business advisor.

## Open Questions

- Which business types should the first dashboard configuration support?
- What are the minimum data inputs required for the Harbor AI Brief?
- What permission levels can view financial KPIs?
- Which KPIs are configurable and which are fixed?
- Should Business Health statuses be editable by admins or fully AI generated?
- What activity events are important enough to appear in the feed?

## Next Specification Work

Before building another major screen, create the complete Harbor Vault Information Architecture.

That document should define:

- Every module
- Every screen
- Every relationship
- Every navigation path
- Every permission level

This will prevent rework, keep the experience consistent, and give Harbor Vault a strong foundation beyond the Foundation.
