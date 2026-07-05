# Harbor Vault Product Specification

Phase 2A

Module 5 Documents and Knowledge

Canonical build reference:
RFC 006 Documents and Knowledge

## Purpose

Documents and Knowledge are Harbor Vault's persistent memory layer.

Documents are not isolated files. They are connected knowledge objects that preserve context, support Work, and give Harbor AI reliable information to retrieve and cite.

## Primary Question

Where is the information we need?

## Core Principles

- Every Document belongs to one Organization.
- Documents are searchable.
- Documents are versioned.
- Documents connect to Work and other records.
- Published Documents become Organization Knowledge according to indexing policy.
- Harbor AI can only use permitted Documents.

## Knowledge Hierarchy

```text
Organization
  Space
    Folder
      Document
```

Example Spaces:

- Operations
- Engineering
- HR
- Sales
- Legal
- Finance

## Core Screens

### Document Library

Purpose:
Help users find, create, and organize Documents.

Should show:

- Document title
- Space
- Type
- Status
- Visibility
- Indexing policy
- Author
- Last updated

### Document Detail

Purpose:
Show one Document and its related context.

Should show:

- Title
- Content
- Summary
- Status
- Visibility
- Tags
- Attachments
- Related Work
- Version history
- Comments
- Harbor AI summary

### Spaces

Purpose:
Separate major knowledge domains.

Spaces should keep Documents organized without making setup heavy.

### Templates

Purpose:
Standardize recurring documentation.

Examples:

- Meeting Notes
- Project Charter
- Incident Report
- SOP
- Policy
- Proposal
- RFC

## Document Types

Initial types:

- Rich Text
- Markdown
- Wiki Page
- Specification
- Meeting Notes
- SOP
- Policy
- Proposal
- Checklist

## Statuses

Initial statuses:

- Draft
- Published
- Archived
- Deleted

## Visibility

Initial visibility levels:

- Private
- Team
- Organization-wide
- Restricted

Future:

- External sharing
- Customer Portal sharing
- Public publishing

## AI Indexing Policies

Initial policies:

- Indexed
- Not Indexed
- Confidential
- Temporary
- Archived

## User Actions

Users can:

- Create Document
- Edit Document
- Publish Document
- Archive Document
- Restore version
- Add tags
- Add comment
- Upload attachment
- Link Work
- Use template
- Ask Harbor AI to summarize

## Harbor AI Behavior

Harbor AI should:

- Summarize Documents
- Answer questions using indexed Documents
- Extract action items
- Suggest related Documents
- Identify outdated information
- Draft revisions
- Generate meeting notes
- Cite sources when practical

## Mobile Behavior

Mobile Documents should prioritize:

1. Search
2. Recent Documents
3. Favorites
4. Document reading
5. AI summary

Do not compress the full desktop library into mobile.

## Open Questions

- Should Spaces be required in Foundation?
- Should comments ship in Foundation?
- Which editor should be used first?
- Should AI indexing be opt in or opt out by default?
- Should version history be immutable from the first build?
