# RFC 001 Harbor Model

Status:
Draft

Owner:
Chief Product and Design Officer

Reviewers:
CEO, Codex Lead Engineer

## Problem Statement

Harbor Vault needs a single organizing model before implementation begins.

Without a clear model, screens, APIs, database tables, and workflows will drift toward whatever is easiest to build in the moment. That creates a product that feels like disconnected modules instead of a coherent Business Operating System.

The Harbor Model defines how Harbor Vault thinks.

## Product Philosophy

Harbor Vault exists to answer one question:

What should this business do next?

The product should help businesses understand what is happening, see what needs attention, coordinate people and work, preserve knowledge, and make better decisions.

## Decision

Harbor Vault is organized around five core business concepts:

1. Organizations
2. People
3. Work
4. Knowledge
5. Insights

Organizations are the center of the system.

Everything important should connect back to an Organization unless there is a clear product reason not to.

Related decisions:

- D-001 Harbor Vault is a Business Operating System.
- D-002 Organizations are the primary entity.
- D-004 AI is designed in from the beginning.
- D-008 Work is the universal operational object.
- D-009 Knowledge is a first class system concept.
- D-010 The Harbor Model has five core concepts.

## Goals

- Establish Harbor Vault as a Business Operating System.
- Define the core business objects.
- Define how objects relate.
- Define what belongs where.
- Give users a simple mental model for understanding the product.
- Give Codex a stable target for screens, APIs, database tables, and workflows.
- Keep Harbor Vault flexible across industries without becoming generic.

## Non Goals

- Define every database column.
- Finalize every screen layout.
- Build industry specific workflows.
- Build invoicing, accounting, or customer portal behavior in the Foundation.
- Replace future RFCs for Dashboard, Organizations, Work, Search, Harbor AI, Documents, or Reporting.

## Core Business Objects

### Organization

Definition:
An Organization is a business, customer, vendor, partner, prospect, internal entity, or other group the company works with.

Why it matters:
Organizations are the best anchor for B2B work. Contacts change, work changes, and documents change, but the Organization provides the durable relationship context.

Belongs here:

- Company profile
- Relationship status
- Contacts
- Locations
- Related Work
- Documents
- Notes
- Activity
- Harbor AI summary
- Business health
- Invoices later
- Assets later

Primary question:
What is the current state of this relationship?

### Person

Definition:
A Person is an internal team member, external contact, decision maker, stakeholder, or customer portal user.

Why it matters:
People explain who is involved, who owns work, who approves decisions, and who needs communication.

Belongs here:

- Contact information
- Role or title
- Organization relationship
- Internal user status
- Assignments
- Permissions
- Activity

Primary question:
Who is involved and what do they need?

### Work

Definition:
Work is anything that needs to be planned, tracked, completed, renewed, resolved, approved, or followed up.

Why it matters:
Work avoids forcing every industry into narrow labels like task, job, project, or ticket.

Work can represent:

- Service call
- Project
- Estimate
- Installation
- Inspection
- Renewal
- Onboarding
- Follow up
- Issue
- General operational work

Belongs here:

- Status
- Priority
- Owner
- Assigned people
- Due date
- Next action
- Related Organization
- Related Documents
- Notes
- Activity
- Harbor AI recommendations

Primary question:
What needs to happen next?

Initial statuses:

- New
- Planned
- In Progress
- Waiting
- Blocked
- Completed
- Cancelled

Initial priority levels:

- Low
- Normal
- High
- Critical

### Knowledge

Definition:
Knowledge is the operating memory of the business.

Why it matters:
Businesses lose time when important context is scattered across files, inboxes, notes, and people's memory.

Knowledge includes:

- Documents
- Notes
- Files
- SOPs
- History
- Policies
- Conversations
- Customer context
- Work context
- AI summaries

Primary question:
Where is the information I need?

### Insight

Definition:
An Insight is a signal, recommendation, trend, risk, summary, or explanation that helps the user make a better decision.

Why it matters:
Insights are where Harbor AI becomes a business advisor instead of a chatbot.

Insights include:

- Harbor AI Briefs
- Business Health statuses
- Risks
- Recommendations
- Trend explanations
- Suggested actions
- Search summaries
- Report explanations

Primary question:
What is Harbor Vault seeing that I might miss?

## Relationship Model

```text
Account
  Organizations
    People
    Work
    Knowledge
    Insights
    Activity

People
  Organizations
  Work assignments
  Permissions

Work
  Organization
  Assigned People
  Knowledge
  Insights
  Activity

Knowledge
  Organization
  Work
  People optional
  AI Summary

Insights
  Organization optional
  Work optional
  Person optional
  Knowledge optional
  Report optional
```

## Navigation Model

Primary navigation:

- Dashboard
- Organizations
- People
- Work
- Calendar
- Documents
- Reporting
- Harbor AI
- Settings

Navigation principles:

- Dashboard answers: What needs attention?
- Organizations answer: Who are we working with?
- People answer: Who is involved?
- Work answers: What needs to happen?
- Calendar answers: When is it happening?
- Documents answer: What knowledge do we need?
- Reporting answers: What is changing?
- Harbor AI answers: What should we know or do next?
- Settings answer: How is the system configured?

## What Belongs Where

Use this rule when designing screens, APIs, or database tables:

- If it describes a business relationship, it belongs to Organization.
- If it describes a human being, responsibility, or access, it belongs to Person.
- If it needs to be done, tracked, scheduled, blocked, or completed, it belongs to Work.
- If it stores context, files, notes, or history, it belongs to Knowledge.
- If it explains, recommends, summarizes, warns, or prioritizes, it belongs to Insight.

## User Mental Model

Users should be able to think:

```text
Who are we working with?
Who is involved?
What needs to happen?
What do we know?
What should we do next?
```

Those questions map directly to:

```text
Organizations
People
Work
Knowledge
Insights
```

## Navigation Implications

Dashboard and Harbor AI are cross cutting experiences.

Organizations, People, Work, Documents, and Reporting represent the working surface of the model.

## Screen Design Implications

Every major screen should make the Harbor Model visible.

Organization screens should show related People, Work, Knowledge, Insights, and Activity.

Work screens should show Organization, assigned People, Knowledge, Activity, and Harbor AI suggestions.

Document screens should show related Organization, Work, visibility, and AI summary.

Reporting screens should explain Insights and link back to the underlying Organizations, People, Work, or Knowledge.

## API Implications

Initial API resources should align with the Harbor Model:

- `/organizations`
- `/people`
- `/work`
- `/documents`
- `/notes`
- `/activity`
- `/insights`
- `/search`
- `/reports`
- `/harbor-ai`

APIs should preserve relationships instead of returning isolated records with no context.

## Initial Route Targets

Codex should use the Harbor Model to structure the first app shell around these routes:

- `/dashboard`
- `/organizations`
- `/organizations/:id`
- `/people`
- `/work`
- `/work/:id`
- `/calendar`
- `/documents`
- `/reports`
- `/harbor-ai`
- `/settings`

The first build target is the navigation shell plus placeholder surfaces for Dashboard, Organizations, Work, Documents, Reporting, and Harbor AI.

## Data Model Implications

Core tables or collections should include:

- accounts
- users
- roles
- organizations
- people
- work_items
- documents
- notes
- activity_events
- insights
- calendar_events
- organization_people
- work_assignments
- events
- reports
- settings

Every record should belong to an Account.

Organizations should be the primary relationship anchor.

Harbor AI Insights should reference real records whenever possible.

## Activity Model

Activity should track meaningful events, not noise.

Meaningful activity includes:

- Work created
- Work completed
- Work blocked
- Organization status changed
- Document added
- Important note added
- Report threshold crossed
- AI risk detected

Avoid activity spam such as a user opening a page, viewing a record, or clicking a tab.

## Search Model

Search should be global across Organizations, People, Work, Documents, Notes, Reporting, and Settings.

Future search should become AI assisted.

Example queries:

- Show overdue Work for Northpoint.
- Find the latest agreement.
- Which customers have no follow up?
- What changed this week?

## Empty State Philosophy

Every empty state should include:

1. What this area is for.
2. Why it matters.
3. The next action.

Example:

No Organizations yet. Add your first Organization to start tracking People, Work, Documents, and activity in Harbor Vault.

## Naming Standards

Preferred terms:

- Organization
- People
- Work
- Documents
- Reporting
- Insights
- Harbor AI

Avoid over specific terms early:

- CRM Account
- Deal
- Ticket
- Job
- Case
- Project
- Pipeline

## Permissions

Permissions should apply across the Harbor Model.

Examples:

- A user may see assigned Work but not financial Insights.
- A user may see an Organization profile but not restricted Documents.
- A customer portal user may see shared Work and shared Documents only.
- Harbor AI must not summarize records the user cannot access.

## Harbor AI Behavior

Harbor AI must understand the Harbor Model.

It should be able to answer:

- What is happening with this Organization?
- Who is involved?
- What Work needs attention?
- What Knowledge is relevant?
- What Insights matter right now?

Harbor AI should be proactive, but permission aware.

## Future Considerations

Future products and modules should only be added if they clearly support the Harbor Model.

Potential future extensions:

- Assets
- Invoices
- Customer Portal
- Workflow Automation
- Integrations
- Industry specific extensions
- Predictive analytics

These should attach to the model, not distort it.

## Open Questions

- Should People support many to many Organization relationships in the Foundation?
- Should Locations be a first class object or an Organization sub object?
- Should Assets be included in Foundation or deferred?
- Should Insights be stored as durable records or generated on demand?
- Which relationships must be required at creation time?

## Acceptance Criteria

- Harbor Vault is defined as a Business Operating System.
- The Harbor Model has five core concepts: Organizations, People, Work, Knowledge, Insights.
- Organizations are the center of the system.
- Every major screen can be traced back to the Harbor Model.
- Every major database table can be traced back to the Harbor Model.
- Every major API resource can be traced back to the Harbor Model.
- Harbor AI behavior is designed around the Harbor Model.
- Future features can be evaluated by whether they fit the Harbor Model.
