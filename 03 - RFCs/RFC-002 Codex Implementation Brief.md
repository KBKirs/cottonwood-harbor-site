# RFC 002 Codex Implementation Brief

## Build Target

Create the Harbor Vault Dashboard as the first authenticated app screen.

## Route

`/dashboard`

## Required Components

- DashboardPage
- DashboardHeader
- HarborAIBrief
- KpiGrid
- KpiCard
- PriorityWorkPanel
- BusinessHealthPanel
- CalendarSnapshot
- ActivityFeed
- AlertsPanel
- DashboardEmptyState
- DashboardSkeleton

## Initial Data

Use mock data first if the backend is not ready.

## Product Rules

- Dashboard answers: What needs attention today?
- Harbor AI Brief is prominent.
- Priority Work is not a full task list.
- Activity must show meaningful events only.
- Use Cottonwood Harbor colors.
- Keep the UI calm and premium.

## Suggested Mock Data Shape

```js
{
  aiBrief: {
    greeting: "Good morning.",
    summary: "Three Work items need attention today.",
    recommendation: "Start with blocked Work before creating anything new."
  },
  kpis: [
    { label: "Open Work", value: 38, detail: "12 due this week", status: "watch" },
    { label: "Overdue Work", value: 7, detail: "Needs attention", status: "warning" },
    { label: "Organizations", value: 214, detail: "8 added this month", status: "healthy" },
    { label: "Upcoming Schedule", value: 9, detail: "Today and tomorrow", status: "healthy" }
  ],
  priorityWork: [],
  businessHealth: [],
  calendar: [],
  activity: [],
  alerts: []
}
```
