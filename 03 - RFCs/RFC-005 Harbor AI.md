# RFC 005 Harbor AI

Status:
Draft

Version:
1.0

Owner:
Chief Product and Design Officer

Reviewers:
CEO, Codex Lead Engineer

Depends on:
RFC 001 Harbor Model, RFC 002 Dashboard, RFC 003 Organizations, RFC 004 Work

## Summary

Harbor AI is the intelligence layer of Harbor Vault.

It is not a chatbot bolted onto the product. It is a first-class collaborator embedded across Organizations, Work, Documents, Calendar, Reporting, Search, and the Dashboard.

Harbor AI should be contextual, explainable, permission aware, and action oriented.

## Problem Statement

Traditional business software makes users search, interpret, prioritize, and decide on their own.

Many AI features in software products are generic chat boxes disconnected from the user's actual business context.

Harbor Vault should be AI native from the beginning. Harbor AI must understand the active Organization, respect permissions, cite its sources, explain its reasoning, and help users decide what to do next.

## Purpose

Define Harbor AI as an Organization-aware assistant that operates across:

- Work.
- Documents.
- Knowledge.
- Calendar.
- Reporting.
- Search.
- Organization records.
- Dashboard briefings.

Harbor AI is contextual, not generic.

It should help businesses run better by turning operational information into clear recommendations, summaries, warnings, and next actions.

## Goals

- Make Harbor AI a first-class part of Harbor Vault.
- Ensure AI operates inside the active Organization context.
- Ensure AI inherits user permissions.
- Define AI context, memory, actions, and governance.
- Support explainable AI outputs with provenance.
- Keep users in control of actions.
- Support Work, Knowledge, Writing, Planning, Analysis, and Automation use cases.
- Give Codex a buildable target for AI surfaces, data structures, and safety rules.

## Non Goals

- Build fully autonomous agents in the Foundation.
- Allow AI to bypass permissions.
- Allow cross-Organization context leakage.
- Replace human responsibility.
- Execute high-impact actions without confirmation.
- Build external email sending, billing actions, or legal/compliance workflows in the Foundation.
- Treat Harbor AI as a generic chatbot disconnected from Harbor Vault records.

## Core Principles

### Principle 1 Organization Scoped Context

Harbor AI operates inside the active Organization.

Changing Organizations changes AI context.

No Work, Documents, Reports, Calendar events, or AI memory should leak across Organizations.

### Principle 2 Explainable Actions

Harbor AI should explain why it made a recommendation.

Users should be able to understand the signal, source, and reasoning behind AI output.

### Principle 3 User Remains In Control

Harbor AI can recommend, draft, summarize, and prepare actions.

Users approve meaningful changes.

High-impact actions require confirmation.

### Principle 4 Permission Aware Behavior

Harbor AI inherits the current user's permissions.

It cannot read, summarize, infer, cite, or modify anything the user cannot access directly.

### Principle 5 Transparent Provenance

Harbor AI should cite the information it used whenever possible.

Examples:

- Related Work items.
- Documents.
- Notes.
- Calendar events.
- Reports.
- Organization activity.

### Principle 6 No Cross Organization Leakage

Harbor AI must never use one Organization's data to answer questions in another Organization.

AI memory, search context, summaries, and recommendations must remain Organization scoped.

## User Stories

- As an owner, I want Harbor AI to tell me what needs attention today.
- As a manager, I want Harbor AI to identify blockers, risk, and stalled Work.
- As a team member, I want Harbor AI to suggest next steps within my permissions.
- As an administrator, I want to configure which AI capabilities are available.
- As a user, I want to know what information Harbor AI used to generate an answer.
- As a user in multiple Organizations, I want confidence that AI context does not leak between Organizations.

## AI Context Model

Harbor AI can access the following within the active Organization, subject to user permissions:

- Organization profile.
- Members.
- Teams.
- Work items.
- Work relationships.
- Work activity.
- Documents.
- Knowledge base.
- Notes.
- Calendar events.
- Reports.
- Insights.
- User role and permissions.
- Organization settings.
- AI memory.
- Saved prompt templates.

Harbor AI should treat inaccessible records as nonexistent.

It should not hint that hidden records exist.

## AI Capabilities

### Work Management

Harbor AI can:

- Create Work drafts.
- Summarize Work progress.
- Identify blockers.
- Recommend priorities.
- Suggest dependencies.
- Generate status updates.
- Identify Work without owners.
- Explain why Work is at risk.

### Knowledge

Harbor AI can:

- Answer questions using accessible Documents and Knowledge.
- Summarize Documents.
- Extract key points.
- Connect related Knowledge to Work.
- Identify missing documentation.

### Writing Assistance

Harbor AI can draft:

- Emails.
- Reports.
- Meeting notes.
- Follow ups.
- Executive summaries.
- Project updates.
- Customer communication drafts.

External sending requires user confirmation and may be deferred.

### Planning

Harbor AI can suggest:

- Roadmaps.
- Milestones.
- Work breakdowns.
- Resource needs.
- Timeline risks.
- Next actions.

### Analysis

Harbor AI can identify:

- Trends.
- Risks.
- Stale relationships.
- Blocker patterns.
- Overdue Work patterns.
- Capacity concerns.
- Business Health changes.

### Automation

Harbor AI can suggest repetitive workflows.

Examples:

- Create follow up Work after renewal conversations.
- Generate weekly status reports.
- Create review reminders after a Document upload.

Automation execution requires separate approval and future RFC detail.

## AI Memory

Harbor AI should support multiple memory scopes.

### Conversation Memory

Short-term memory within an active conversation.

Used to preserve context while the user is working with Harbor AI.

### Organization Memory

Organization-scoped memory explicitly saved for future use.

Examples:

- Company goals.
- Standard operating preferences.
- Important terminology.
- Recurring reporting expectations.

### User Preferences

Preferences tied to the user.

Examples:

- Preferred writing tone.
- Preferred summary length.
- Preferred date format.
- Favorite views.

User preferences must not expose Organization data across Organizations.

### Explicitly Saved Knowledge

Information deliberately saved into Knowledge, Documents, Notes, or AI memory.

Users should understand when something is saved.

### Temporary Working Context

Context used for a specific task, search, summary, or draft.

Temporary context should not become durable memory unless explicitly saved.

## Conversation Model

Harbor AI conversations should support:

- Persistent conversations.
- Named chats.
- Organization linkage.
- Optional Work or Project linkage.
- Searchable history.
- Permission-aware retrieval.
- Archived conversations.

Conversation fields:

- id
- organizationId
- userId
- title
- linkedObjectType
- linkedObjectId
- createdAt
- updatedAt
- archivedAt

## AI Actions

AI actions should be grouped by risk level.

### Read Only Actions

Read-only actions do not modify Harbor Vault data.

Examples:

- Summaries.
- Answers.
- Trend explanations.
- Risk identification.
- Document summaries.

### Suggested Actions

Suggested actions prepare a recommendation but do not execute it.

Examples:

- Recommend creating Work.
- Suggest changing priority.
- Suggest assigning an owner.
- Suggest linking related Work.
- Suggest adding a follow up.

### Executable Actions

Executable actions modify Harbor Vault data.

Examples:

- Create Work.
- Update Work status.
- Assign an owner.
- Add a note.
- Save a summary.

Executable actions require user confirmation unless explicitly configured otherwise by administrators.

High-impact actions always require confirmation.

## Permission Model

Harbor AI inherits the user's permissions.

Rules:

- AI cannot read anything the user cannot access.
- AI cannot summarize anything the user cannot access.
- AI cannot cite hidden records.
- AI cannot modify anything the user cannot modify.
- AI cannot infer restricted conclusions from inaccessible records.
- AI-generated actions must be attributed to the user and AI system.

If permission is insufficient, Harbor AI should respond with a clear limitation, not a workaround.

## Prompt Templates

Organizations can define reusable prompt templates for common workflows.

Examples:

- Weekly status report.
- Executive summary.
- Meeting agenda.
- Project kickoff plan.
- Renewal follow up.
- Blocked Work review.
- Customer relationship summary.
- Document summary.

Prompt template fields:

- id
- organizationId
- name
- description
- prompt
- allowedRoles
- linkedObjectTypes
- createdBy
- createdAt
- updatedAt

## Knowledge Integration

Harbor AI should combine information from:

- Work.
- Documents.
- Notes.
- Reports.
- Calendar.
- Organization settings.
- Activity.
- Knowledge base.

It must respect:

- Organization boundaries.
- User permissions.
- Document visibility.
- Role restrictions.
- Data retention settings.

## Provenance And Citations

Harbor AI should show the sources it used when practical.

Source references may include:

- Work item title and link.
- Document title and link.
- Report name and link.
- Calendar event title and link.
- Organization activity event.
- Note reference.

If an answer is based on general reasoning rather than records, Harbor AI should make that clear.

## Safety And Governance

Harbor AI governance should include:

- Audit logs for AI-generated actions.
- AI-generated content labels.
- Administrator controls for AI capabilities.
- Data retention policies.
- Model selection policies later.
- Usage limits.
- Permission enforcement.
- Review history for executable actions.
- Dismissal or feedback tracking for recommendations.

AI should avoid fake certainty.

When uncertain, Harbor AI should say what it knows, what it does not know, and what the user can do next.

## AI Output Standards

Harbor AI responses should be:

- Clear.
- Short.
- Explainable.
- Action oriented.
- Permission aware.
- Business focused.
- Calm.
- Specific.

Avoid:

- Hype.
- Fake confidence.
- Generic advice detached from records.
- Overly long answers by default.
- Hidden reasoning that cannot be checked.

## Harbor AI Surfaces

### Dashboard

Harbor AI Brief:

- What needs attention?
- What changed since yesterday?
- Where are the risks?
- What should I do next?

### Organization Record

AI-generated summary:

- Relationship status.
- Recent activity.
- Open Work.
- Risks.
- Suggested next action.

### Work Item

AI-suggested next steps:

- Priority recommendation.
- Risk explanation.
- Missing information.
- Suggested owner.
- Suggested status change.
- Suggested dependency.

### Documents And Knowledge

AI can:

- Summarize Documents.
- Answer questions.
- Extract action items.
- Link relevant Knowledge to Work.

### Reports

AI trend explanation:

- What changed?
- Why might it matter?
- What decision should the user consider?

### Calendar

AI can:

- Identify schedule conflicts.
- Suggest preparation Work.
- Summarize upcoming commitments.
- Recommend follow ups.

### Search

AI can:

- Understand natural language queries.
- Explain grouped results.
- Summarize relevant context.
- Suggest next searches or actions.

### Dedicated Harbor AI Module

Harbor AI should also have a dedicated surface for persistent conversations, history, templates, and Organization-specific AI settings.

## Foundation Scope

Foundation should include:

- Dashboard AI Brief placeholder or rule-based brief.
- Organization AI Summary placeholder.
- Work AI Suggested Next Steps placeholder.
- Report AI Trend Explanation placeholder.
- Global AI Search foundation.
- AI output labels.
- Basic AI action confirmation pattern.
- Basic AI audit event structure.

Foundation should not include:

- Fully autonomous actions.
- Complex agent workflows.
- External email sending without approval.
- Automated billing actions.
- Cross-system automation.
- Custom model selection unless needed.

## Data Model Implications

Core tables or collections:

- ai_conversations
- ai_messages
- ai_actions
- ai_action_audit_events
- ai_summaries
- ai_recommendations
- ai_memory
- ai_prompt_templates
- ai_source_references
- ai_feedback

Common fields:

- organizationId
- userId
- subjectType
- subjectId
- status
- sourceReferences
- createdAt
- updatedAt

Every AI record that uses business context should be Organization scoped.

## Suggested API And Data Fetching

Initial endpoint concepts:

```text
POST /api/ai/chat
GET /api/ai/conversations
GET /api/ai/conversations/:id
POST /api/ai/actions
POST /api/ai/actions/:id/confirm
GET /api/ai/summaries/:subjectType/:subjectId
POST /api/ai/summaries
GET /api/ai/templates
POST /api/ai/templates
```

All endpoints must evaluate Organization context and user permissions.

## Analytics

Track only useful product signals:

- AI Brief viewed.
- AI recommendation accepted.
- AI recommendation dismissed.
- AI action confirmed.
- AI answer source opened.
- Prompt template used.

Avoid invasive monitoring of sensitive content beyond what is needed for audit, reliability, and product improvement.

## Open Questions

- Which AI features require user approval in Foundation?
- Which insights should be generated automatically?
- How often should the AI Brief refresh?
- Should users be able to dismiss insights?
- Should dismissed insights train future prioritization?
- Which AI memories can administrators manage?
- Should Organization memory be visible and editable?
- Which model providers are acceptable for customer data?

## Related Decisions

- D-004 AI is designed in from the beginning.
- D-012 Harbor AI Brief is the Dashboard centerpiece.
- D-018 Organization context scopes search, AI, dashboard, and permissions.
- D-023 Harbor AI is a first-class collaborator, not a bolted-on chatbot.
- D-024 Harbor AI must provide transparent provenance.
- D-025 Harbor AI actions are permission-aware and auditable.
- D-026 Users remain in control of AI-executable actions.

## Acceptance Criteria

- Harbor AI is defined as an Organization-aware assistant.
- Harbor AI never accesses data outside the active Organization.
- Harbor AI respects all user permissions.
- Harbor AI can operate across Work, Documents, Calendar, Reporting, Search, and Organization records.
- Harbor AI distinguishes read-only, suggested, and executable actions.
- Executable AI actions require confirmation where appropriate.
- AI-generated actions are attributable and auditable.
- Users can distinguish AI-generated content from human-authored content.
- Harbor AI can cite the records it used when practical.
- Harbor AI supports persistent conversations linked to Organizations and optionally linked to Work or Projects.
- Harbor AI supports memory scopes for conversation memory, Organization memory, user preferences, explicitly saved Knowledge, and temporary working context.
- Administrator controls, usage limits, retention policies, and model selection policies are defined for future governance.
- Codex can build initial Harbor AI placeholders, data structures, and permission rules from this RFC.
