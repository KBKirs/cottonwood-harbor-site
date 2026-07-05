# Harbor Vault Product Specification

Phase 2A

Module 4 Harbor AI

Canonical build reference:
RFC 005 Harbor AI

## Purpose

Harbor AI is the intelligence layer of Harbor Vault.

It should not wait for questions.

It should proactively surface what matters, explain why it matters, and suggest what to do next.

Harbor AI is not a chatbot.

Harbor AI is an Organization-aware business advisor and first-class collaborator.

## Primary Question

What is Harbor AI seeing that I might miss?

## AI Native Product Rule

Harbor Vault is AI native, not AI enhanced.

Every major screen should ask:

What would Harbor AI do here?

## Core AI Behaviors

Harbor AI should:

- Summarize important information
- Surface risks
- Suggest next actions
- Explain trends
- Identify missing information
- Detect patterns
- Prioritize attention
- Translate data into plain language

## Core Principles

- Organization scoped context
- Explainable actions
- User remains in control
- Permission aware behavior
- Transparent provenance
- No cross Organization context leakage

## AI Context Model

Harbor AI can access the following inside the active Organization, subject to user permissions:

- Organization profile
- Members
- Teams
- Work items
- Documents
- Knowledge base
- Calendar
- Reports
- User role and permissions

Harbor AI should treat inaccessible records as nonexistent.

It should not hint that hidden records exist.

## AI Memory

Memory scopes:

- Conversation memory
- Organization memory
- User preferences
- Explicitly saved Knowledge
- Temporary working context

Temporary context should not become durable memory unless explicitly saved.

## Conversation Model

Harbor AI conversations should support:

- Persistent conversations
- Named chats
- Organization linkage
- Optional Work or Project linkage
- Searchable history
- Archived conversations

## AI Actions

AI actions are grouped by risk level.

Read only actions:

- Summaries
- Answers
- Trend explanations
- Risk identification

Suggested actions:

- Recommend creating Work
- Suggest changing priority
- Suggest assigning an owner
- Suggest linking related Work

Executable actions:

- Create Work
- Update Work status
- Assign an owner
- Add a note
- Save a summary

Executable actions require confirmation where appropriate.

## Harbor AI Surfaces

### Dashboard

Harbor AI Brief:

- What needs attention?
- What changed since yesterday?
- Where are the risks?
- What should I do next?

### Organization Record

AI generated summary:

- Relationship status
- Recent activity
- Open Work
- Risks
- Suggested next action

### Work Item

AI suggested next steps:

- Priority recommendation
- Risk explanation
- Missing information
- Suggested owner
- Suggested status change

### Reports

AI trend explanation:

- What changed?
- Why might it matter?
- What decision should the user consider?

### Search

Intent aware search:

- Understand natural language queries
- Search across Organizations, People, Work, Documents, Notes, Reports, and AI insights
- Return results with context

## Proactive Insight Examples

```text
You've had three customers request schedule changes this week. Would you like to see a pattern?
```

```text
Revenue has increased 14 percent over the last six weeks while overtime costs have also increased. Here are three possible causes.
```

```text
Northwind has three open Work items and no activity in nine days. This relationship may need attention.
```

## AI Boundaries

Harbor AI should not:

- Pretend uncertainty is fact
- Reveal information a user is not allowed to access
- Execute high impact actions without approval
- Replace human responsibility
- Generate noise
- Create fake confidence
- Use data from another Organization
- Hide the sources behind important recommendations

## Permissions

Harbor AI must respect role permissions.

If a user cannot access financial KPIs, Harbor AI cannot reveal financial conclusions.

If a user cannot access restricted documents, Harbor AI cannot summarize them.

If a user can only view assigned Work, Harbor AI can only answer within that scope.

AI cannot read, summarize, cite, or modify anything the user cannot access directly.

## Provenance

Harbor AI should cite the information it used whenever practical.

Source references may include:

- Work items
- Documents
- Notes
- Calendar events
- Reports
- Organization activity

If an answer is based on general reasoning rather than records, Harbor AI should make that clear.

## Prompt Templates

Organizations can define reusable prompt templates for common workflows:

- Weekly status reports
- Executive summaries
- Meeting agendas
- Project kickoff plans
- Renewal follow ups
- Blocked Work reviews
- Customer relationship summaries

## AI Output Standards

Harbor AI responses should be:

- Clear
- Short
- Explainable
- Action oriented
- Permission aware
- Business focused

## Foundation AI Features

Foundation scope should include:

- Dashboard AI Brief
- Organization AI Summary
- Work AI Suggested Next Steps
- Report AI Trend Explanation
- Global AI Search foundation
- AI output labels
- Basic AI action confirmation pattern
- Basic AI audit event structure

Foundation scope should not include:

- Fully autonomous actions
- Complex agent workflows
- External email sending without approval
- Automated billing actions

## Open Questions

- Which AI features require user approval?
- Which insights should be generated automatically?
- How often should the AI Brief refresh?
- Should users be able to dismiss insights?
- Should dismissed insights train future prioritization?
- Should Organization memory be visible and editable?
- Which AI memories can administrators manage?
