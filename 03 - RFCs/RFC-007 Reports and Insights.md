# RFC 007 Reports and Insights

Status:
Draft

Owner:
Chief Product and Design Officer

Reviewers:
CEO, Codex Lead Engineer

## Problem Statement

Reports often show charts without helping users decide. Harbor Vault Reporting should explain trends and support decisions.

## Goals

- Make Reporting decision oriented.
- Use Harbor AI to explain trends in plain language.
- Keep charts focused and purposeful.
- Connect Reporting to Business Health and Dashboard signals.

## Non Goals

- Build a full business intelligence platform in Foundation.
- Build every report customers may eventually want.
- Show charts for decoration.

## User Stories

- As an owner, I want to understand what changed and what decision I should consider.
- As a manager, I want operational trends explained clearly.
- As an administrator, I want reports to respect permissions.

## UI Direction Or Mockup Notes

Reporting areas:

- Overview.
- Revenue later.
- Customers.
- Operations.
- Team Capacity.
- Growth.
- AI Trend Explanation.

## Workflow

User opens a report, reviews the key trend, reads Harbor AI explanation, and chooses a recommended next action or investigates related records.

## Permissions

Financial reports should be restricted by role.

Team capacity reports may be restricted depending on business settings.

## Data Model Implications

Reports need access to:

- Organizations.
- Work.
- Activity.
- Users.
- Calendar events.
- Financial data later.
- Insights.

## Harbor AI Behavior

Harbor AI should explain:

- What changed.
- Why it might matter.
- What risks are visible.
- What action the user should consider.

## Future Considerations

- Custom reports.
- Exporting.
- Scheduled report emails.
- Benchmarking.
- Forecasting.

## Acceptance Criteria

- Every report answers: What decision should I make?
- Harbor AI explains trends in plain language.
- Reports respect permissions.
- Dashboard signals can link to deeper reports.
