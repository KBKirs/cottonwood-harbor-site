# RFC 009 Global Search

Status:
Draft

Owner:
Chief Product and Design Officer

Reviewers:
CEO, Codex Lead Engineer

## Problem Statement

Business information gets scattered. Harbor Vault needs one search experience that can find and explain information across the vault.

## Goals

- Provide one global search bar.
- Search across Organizations, People, Work, Documents, Notes, Reports, Calendar events, and AI insights.
- Support intent aware search, not just keywords.
- Return results with context.

## Non Goals

- Build a full semantic search engine in the earliest prototype.
- Search external systems before integrations exist.

## User Stories

- As an owner, I want to search for a customer and see related Work, notes, and documents.
- As a manager, I want to search blocked renewals and see relevant Work.
- As a team member, I want to find documents and customer context quickly.

## UI Direction Or Mockup Notes

Global search should be available from the main app shell.

Results should group by type:

- Organizations.
- People.
- Work.
- Documents.
- Notes.
- Insights.

## Workflow

User enters a query, Harbor Vault returns grouped results, and Harbor AI can optionally explain or summarize the results.

## Permissions

Search must only return records the user is allowed to access.

Harbor AI must not summarize hidden records.

## Data Model Implications

Search index should eventually include:

- Record type.
- Record id.
- Title.
- Summary.
- Organization id.
- Permissions context.
- Last updated date.

## Harbor AI Behavior

Harbor AI should understand natural language queries and return useful context, not just exact keyword matches.

## Future Considerations

- Semantic search.
- Saved searches.
- Search suggestions.
- Cross-system search after integrations.

## Acceptance Criteria

- One search bar searches core Harbor Vault objects.
- Results respect permissions.
- Results are grouped by object type.
- AI can summarize search context.
