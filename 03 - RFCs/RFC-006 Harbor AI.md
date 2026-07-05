# RFC 006 Harbor AI

Status:
Draft

Owner:
Chief Product and Design Officer

Reviewers:
CEO, Codex Lead Engineer

## Problem Statement

AI should not be bolted onto Harbor Vault later. Harbor Vault should be AI native from the beginning.

## Goals

- Make Harbor AI proactive.
- Make Harbor AI permission aware.
- Use AI to summarize, explain, prioritize, and recommend.
- Keep AI focused on business decisions.

## Non Goals

- Fully autonomous actions in Foundation.
- AI that replaces human responsibility.
- AI gimmicks that do not help businesses run better.

## User Stories

- As an owner, I want Harbor AI to tell me what needs attention.
- As a manager, I want Harbor AI to explain risks and blocked work.
- As an employee, I want Harbor AI to suggest next steps within my permissions.

## UI Direction Or Mockup Notes

Harbor AI appears in:

- Dashboard AI Brief
- Organization AI Summary
- Work Suggested Next Steps
- Reporting trend explanations
- Global search summaries
- Dedicated Harbor AI module

## Workflow

Harbor AI surfaces insight, explains why it matters, suggests next action, and waits for user approval where action has business impact.

## Permissions

Harbor AI must respect all role and record permissions.

AI cannot reveal information the user cannot access directly.

## Data Model Implications

AI needs:

- Insights
- AI summaries
- Recommendations
- Subject references
- Confidence
- Status
- Dismissal or action history

## Harbor AI Behavior

Harbor AI should:

- Summarize
- Explain
- Prioritize
- Recommend
- Identify missing information
- Detect patterns
- Avoid fake certainty

## Future Considerations

- AI action approval workflow
- Insight training from dismissed recommendations
- Agent workflows
- External communication drafting

## Acceptance Criteria

- Harbor AI is designed into core screens.
- AI outputs are short, clear, explainable, and action oriented.
- AI respects permissions.
- AI does not execute high impact actions without approval.
