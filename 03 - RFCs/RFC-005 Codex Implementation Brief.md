# RFC 005 Codex Implementation Brief

## Build Target

Create the Harbor AI foundation as an Organization-aware, permission-aware intelligence layer across Harbor Vault.

## Routes

- `/harbor-ai`
- `/harbor-ai/conversations`
- `/harbor-ai/conversations/:id`
- `/harbor-ai/templates`
- `/harbor-ai/settings`

## Required Components

- HarborAIPage
- HarborAIConversationList
- HarborAIConversation
- HarborAIMessage
- HarborAIComposer
- HarborAISourceList
- HarborAIActionCard
- HarborAIConfirmationDialog
- HarborAIBrief
- HarborAISummaryCard
- HarborAIRecommendationCard
- HarborAITemplateList
- HarborAISettingsPanel
- HarborAIEmptyState
- HarborAISkeleton

## Suggested Core Entities

- AIConversation
- AIMessage
- AIAction
- AIActionAuditEvent
- AISummary
- AIRecommendation
- AIMemory
- AIPromptTemplate
- AISourceReference
- AIFeedback

## Product Rules

- Harbor AI is not a generic chatbot.
- Harbor AI operates inside the active Organization.
- Harbor AI inherits the user's permissions.
- Harbor AI must not reveal hidden records.
- Harbor AI should cite sources when practical.
- Harbor AI-generated content must be labeled.
- Executable AI actions require confirmation where appropriate.
- AI actions must be auditable.
- Users remain in control.

## First Build Target

Build:

1. Harbor AI route placeholder.
2. Reusable AI summary card.
3. Reusable AI recommendation card.
4. Source reference list component.
5. AI action confirmation pattern.
6. Mock AI Brief for Dashboard.
7. Mock Organization AI Summary.
8. Mock Work AI Suggested Next Steps.
9. Empty, loading, and permission-limited states.

## Suggested Mock Data Shape

```js
{
  id: "rec_001",
  organizationId: "org_001",
  subjectType: "work",
  subjectId: "work_001",
  type: "next_action",
  title: "Assign an owner",
  summary: "This renewal is due soon but has no owner.",
  recommendation: "Assign an owner or move the Work item to Blocked with a clear reason.",
  confidence: "medium",
  generatedBy: "harbor_ai",
  sourceReferences: [
    { type: "work", id: "work_001", title: "Renew customer service agreement" }
  ],
  requiresConfirmation: true,
  status: "suggested",
  createdAt: "2026-07-05T14:00:00Z"
}
```
