# RFC 006 Codex Implementation Brief

## Build Target

Create the Harbor Vault Documents and Knowledge module as the Organization-scoped memory layer.

## Routes

- `/documents`
- `/documents/spaces`
- `/documents/spaces/:spaceId`
- `/documents/new`
- `/documents/:id`
- `/documents/:id/versions`
- `/documents/:id/comments`
- `/documents/:id/relationships`
- `/documents/templates`
- `/documents/archive`

## Required Components

- DocumentLibraryPage
- DocumentDetailPage
- DocumentEditor
- DocumentHeader
- DocumentSpaceList
- DocumentFolderTree
- DocumentVersionHistory
- DocumentAttachmentList
- DocumentRelationshipList
- DocumentCommentsPanel
- DocumentTagList
- DocumentTemplateList
- DocumentAISummary
- DocumentIndexingPolicyBadge
- DocumentEmptyState
- DocumentSkeleton

## Suggested Core Entities

- DocumentSpace
- DocumentFolder
- Document
- DocumentVersion
- DocumentAttachment
- DocumentRelationship
- DocumentComment
- DocumentTag
- DocumentTemplate
- DocumentIndexingPolicy

## Product Rules

- Documents are connected knowledge objects, not isolated files.
- Every Document belongs to one Organization.
- Published Documents become Organization Knowledge according to indexing policy.
- Version history must be preserved.
- Harbor AI can only use Documents the user can access and policy allows.
- Document relationships are bidirectional.
- Templates standardize recurring documentation.

## First Build Target

Build:

1. Document library route.
2. Document detail route.
3. Space and Folder placeholders.
4. Mock Documents scoped to an Organization.
5. Status, visibility, and indexing policy badges.
6. AI summary placeholder with source citation.
7. Version history placeholder.
8. Empty, loading, and permission-limited states.

## Suggested Mock Data Shape

```js
{
  id: "doc_001",
  organizationId: "org_001",
  spaceId: "space_operations",
  folderId: null,
  title: "Weekly Operations Review",
  slug: "weekly-operations-review",
  type: "Meeting Notes",
  content: "Review blocked Work, overdue items, and customer follow ups.",
  summary: "Weekly operating rhythm for reviewing priority Work.",
  authorId: "user_001",
  status: "Published",
  visibility: "Organization-wide",
  indexingPolicy: "Indexed",
  tags: ["operations", "weekly"],
  createdAt: "2026-07-05T14:00:00Z",
  updatedAt: "2026-07-05T14:00:00Z",
  publishedAt: "2026-07-05T14:00:00Z"
}
```
