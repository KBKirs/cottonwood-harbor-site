# RFC 006 Documents and Knowledge

Status:
Draft

Version:
1.0

Owner:
Chief Product and Design Officer

Reviewers:
CEO, Codex Lead Engineer

Depends on:
RFC 001 Harbor Model, RFC 003 Organizations, RFC 004 Work, RFC 005 Harbor AI

## Summary

Documents and Knowledge are Harbor Vault's persistent memory layer.

Work is about execution. Documents and Knowledge are about preserving, organizing, versioning, searching, and reusing the information that helps Organizations operate with clarity.

Documents are not isolated files. They are connected knowledge objects that can relate to Organizations, Work, Teams, Members, Calendar Events, Reports, and AI Conversations.

## Problem Statement

Business information often gets scattered across files, inboxes, notes, chats, shared drives, and people's memory.

When knowledge is disconnected from Work and Organizations, teams lose context, repeat decisions, miss obligations, and make AI less useful.

Harbor Vault needs a persistent, Organization-scoped Knowledge layer that users and Harbor AI can reliably reference over time.

## Purpose

The Documents and Knowledge module enables Organizations to create, organize, search, version, and relate documents to Work while making Organization knowledge available to Harbor AI according to clear permissions and indexing policies.

## Goals

- Store Organization knowledge.
- Support collaborative editing later.
- Maintain version history.
- Organize information logically.
- Integrate seamlessly with Work.
- Provide AI-ready knowledge retrieval.
- Scale from simple notes to comprehensive documentation.
- Keep Documents searchable, contextual, and permission aware.

## Non Goals

- Build a full enterprise document management system in Foundation.
- Build real-time collaborative editing in Foundation.
- Build offline editing in Foundation.
- Build electronic signature in Foundation.
- Build external storage integrations before validation.
- Let AI index confidential content without policy control.

## Core Principles

### Principle 1 Organization Scoped

Every Document belongs to exactly one Organization.

Documents inherit Organization context, search scope, AI context, and permission boundaries.

### Principle 2 Searchable

Document title, content, metadata, tags, attachments, and relationships should be searchable according to permissions and indexing policy.

### Principle 3 Versioned

Every meaningful edit creates a new revision.

History is never lost.

Users should be able to compare versions, restore versions, and view history.

### Principle 4 Connected

Documents can link to:

- Work.
- Projects.
- Teams.
- Members.
- Calendar Events.
- Reports.
- AI Conversations.

Relationships should be bidirectional.

### Principle 5 AI Ready

Documents automatically become part of the Organization knowledge base according to configured indexing policies.

Harbor AI should retrieve, summarize, reason over, and cite indexed Documents without crossing Organization or permission boundaries.

## User Stories

- As a manager, I want Documents attached to the Organization and Work they belong to.
- As a team member, I want to find the right Document from Work context.
- As an owner, I want Harbor AI to summarize important Documents.
- As an administrator, I want to decide which Documents Harbor AI can index.
- As a user, I want to see version history and restore prior versions.
- As a team, I want templates that standardize recurring documentation.

## Knowledge Hierarchy

Recommended hierarchy:

```text
Organization
  Space
    Folder
      Folder
      Document
    Document
```

Spaces separate major knowledge domains.

Example Spaces:

- Operations.
- Engineering.
- HR.
- Sales.
- Legal.
- Finance.
- Customer Success.

Folders are optional organization tools inside Spaces.

## Document Types

Supported types:

- Rich Text.
- Markdown.
- Wiki Page.
- Specification.
- Meeting Notes.
- SOP.
- Policy.
- Proposal.
- Checklist.

Future types:

- Whiteboard.
- Spreadsheet.
- Diagram.

## Document Object

Core fields:

- id
- organizationId
- spaceId
- folderId
- title
- slug
- type
- content
- summary
- authorId
- status
- visibility
- indexingPolicy
- createdAt
- updatedAt
- publishedAt
- archivedAt

Optional or future fields:

- currentVersionId
- templateId
- ownerId
- tags
- favoriteCount
- lastViewedAt
- externalStorageKey

## Status Model

Initial statuses:

- Draft
- Published
- Archived
- Deleted

Status notes:

- Draft means not yet part of standard published knowledge.
- Published means available according to permissions and indexing policy.
- Archived means preserved but no longer active.
- Deleted means removed from active use and subject to retention policy.

## Version History

Each revision stores:

- id
- documentId
- version
- editorId
- timestamp
- summary
- contentSnapshot

Users can:

- Compare versions.
- Restore versions.
- View history.

Version history should be immutable.

## Rich Content

Documents should support:

- Headings.
- Lists.
- Tables.
- Images.
- Attachments.
- Code blocks.
- Quotes.
- Checklists.
- Callouts.
- Embedded links.

Foundation can begin with a simpler rich text or markdown editor as long as the data model supports richer content later.

## Attachments

Documents may contain or link attachments:

- PDF.
- Word.
- Excel.
- PowerPoint.
- Images.
- Video.
- Audio.
- ZIP.

Future:

- CAD.
- GIS.

Attachments inherit Document and Organization permissions.

## Relationships

Documents may relate to:

- Work.
- Projects.
- Reports.
- Calendar Events.
- Teams.
- Members.
- AI Conversations.

Relationships are bidirectional so users can move from Work to Documents and Documents back to Work.

Relationship fields:

- sourceDocumentId
- targetType
- targetId
- relationshipType
- createdBy
- createdAt

## Knowledge Graph

Harbor Vault maintains logical relationships between:

- Documents.
- Work.
- Organizations.
- People.
- Teams.
- Reports.
- Calendar Events.
- AI Conversations.

This creates an internal knowledge graph Harbor AI can use to find context, suggest links, identify stale information, and explain sources.

## Comments

Users may:

- Comment.
- Reply.
- Resolve discussions.
- Mention Members.

Harbor AI can summarize comment threads where permitted.

## Tags

Documents support unlimited tags.

Examples:

- finance
- policy
- onboarding
- engineering
- marketing
- urgent

Tags support search, filtering, organization, and AI retrieval.

## Sharing And Visibility

Initial visibility levels:

- Private.
- Team.
- Organization-wide.
- Restricted.

Future sharing:

- External sharing.
- Public publishing.
- Password-protected links.
- Customer Portal sharing.

Sharing must respect Organization context and user permissions.

## Templates

Organizations can define Document templates.

Examples:

- Meeting Notes.
- Project Charter.
- Incident Report.
- SOP.
- Policy.
- Proposal.
- RFC.

Templates standardize documentation and improve AI-ready structure.

## Organization Knowledge Base

All published Documents become searchable Organization knowledge unless excluded by policy.

Knowledge includes:

- Documents.
- Policies.
- Procedures.
- Specifications.
- Meeting notes.
- FAQs.
- Guides.

The knowledge base is Organization scoped and permission aware.

## AI Knowledge Policies

Administrators configure how Documents are used by Harbor AI.

Indexing policies:

- Indexed.
- Not Indexed.
- Confidential.
- Temporary.
- Archived.

Policy behavior:

- Indexed content can be retrieved and cited by Harbor AI where permissions allow.
- Not Indexed content can be viewed by users but not retrieved by AI.
- Confidential content requires stricter access and citation controls.
- Temporary content may expire or be excluded from long-term memory.
- Archived content is preserved but deprioritized unless directly requested.

## Search

Search indexes:

- Title.
- Content.
- Tags.
- Attachments.
- Authors.
- Linked Work.
- Comments.
- Metadata.

Search results are scoped to the active Organization and user permissions.

## Harbor AI Behavior

Harbor AI can:

- Summarize Documents.
- Answer questions using indexed Documents.
- Generate documentation.
- Suggest links.
- Recommend related Documents.
- Identify outdated information.
- Draft revisions.
- Generate meeting notes.
- Extract action items.
- Summarize comment threads.

Harbor AI must cite Document sources when practical.

Harbor AI must not retrieve, summarize, or infer from Documents the user cannot access.

## Navigation

Documents navigation:

```text
Documents
  Spaces
  Recent
  Favorites
  Shared
  Templates
  Archive
```

## Permissions

Documents inherit Organization permissions and add visibility controls.

General rules:

- Owners and Administrators can manage Organization Documents.
- Managers can manage Team or relevant Documents.
- Team Members can view and edit Documents they have access to.
- Restricted Documents require explicit permission.
- Customer Portal users later can only see shared Documents.
- Harbor AI only uses Documents the current user can access and that policy allows AI to index.

## Data Model Implications

Core tables or collections:

- document_spaces
- document_folders
- documents
- document_versions
- document_attachments
- document_relationships
- document_comments
- document_tags
- document_templates
- document_indexing_policies

Every table should preserve Organization scope directly or through a Document that belongs to an Organization.

## Suggested API And Data Fetching

Initial endpoint concepts:

```text
GET /api/documents
POST /api/documents
GET /api/documents/:id
PATCH /api/documents/:id
POST /api/documents/:id/publish
POST /api/documents/:id/archive
GET /api/documents/:id/versions
POST /api/documents/:id/versions/:versionId/restore
POST /api/documents/:id/comments
POST /api/documents/:id/relationships
GET /api/document-spaces
POST /api/document-spaces
GET /api/document-templates
```

Common query parameters:

- organizationId
- spaceId
- folderId
- type
- status
- visibility
- tag
- authorId
- linkedWorkId
- indexed

## Empty State Experience

If no Documents exist, show:

No Documents yet.

Create your first Document to start building your Organization's searchable knowledge base.

Primary CTA:

- Create Document.

Secondary CTAs:

- Create Space.
- Use Template.
- Upload File.

## Loading State

Use skeleton rows or cards.

Avoid blank Document views.

## Error State

If Documents fail to load, show:

We could not load Documents.

Your data is safe. Please refresh the page or try again in a moment.

Include a retry action.

## Future Features

- Real-time collaborative editing.
- Offline mode.
- Document approvals.
- Electronic signatures.
- Translation.
- Knowledge analytics.
- Duplicate detection.
- Automatic categorization.
- Semantic clustering.
- External sharing.
- Public publishing.
- Customer Portal sharing.
- External storage integrations.

## Open Questions

- Should Spaces be required in Foundation or optional?
- Should version history be immutable from the first build?
- Should comments ship in Foundation or follow shortly after?
- Which content editor should be used for the first implementation?
- Should AI indexing be opt in or opt out by default?
- Should Organization memory and published Documents share the same Knowledge index?

## Related Decisions

- D-009 Knowledge is a first class system concept.
- D-027 Documents are connected knowledge objects, not isolated files.
- D-028 Published Documents become Organization knowledge according to indexing policy.
- D-029 Document history is versioned and restorable.
- D-030 Harbor AI retrieves Documents only within permission and policy boundaries.

## Acceptance Criteria

- Every Document belongs to exactly one Organization.
- Documents are organized into Spaces and optional Folders.
- Documents maintain immutable version history with restore capability.
- Rich text, attachments, comments, and tags are supported or the data model allows them.
- Documents can be linked to Work, Reports, Calendar Events, Teams, Members, and AI Conversations.
- Search indexes Document content and metadata while respecting Organization and permission boundaries.
- Published Documents become part of the Organization knowledge base according to configurable indexing policies.
- Harbor AI can summarize, retrieve, and reason over indexed Documents without accessing content outside the active Organization.
- Harbor AI cites Document sources when practical.
- Templates enable standardized Document creation.
- The architecture supports future collaboration, approvals, analytics, and external sharing without changing the core Document model.
