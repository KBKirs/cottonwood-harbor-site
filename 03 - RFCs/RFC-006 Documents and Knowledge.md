# RFC 006 Documents and Knowledge

Status:
Draft

Owner:
Chief Product and Design Officer

Reviewers:
CEO, Codex Lead Engineer

## Problem Statement

Businesses need operating knowledge, customer documents, notes, and files connected to the Work and Organizations they belong to.

## Goals

- Make Documents part of the Harbor Model Knowledge layer.
- Connect Documents to Organizations and Work.
- Allow Harbor AI summaries where permitted.
- Keep Documents useful, searchable, and contextual.

## Non Goals

- Build a full document management system in Foundation.
- Build complex version control in Foundation.
- Build external storage integrations before validation.

## User Stories

- As a manager, I want Documents attached to the Organization they belong to.
- As a team member, I want to find the right Document from Work context.
- As an owner, I want Harbor AI to summarize important Documents.

## UI Direction Or Mockup Notes

Document views:

- Document Library.
- Categories.
- Document Detail.
- Upload.
- AI Summary.

## Workflow

User uploads or links a Document, assigns category and visibility, connects it to an Organization or Work item, and optionally generates an AI summary.

## Permissions

Documents need visibility levels:

- Internal.
- Restricted.
- Shared with customer later.

## Data Model Implications

Document should include:

- Organization.
- Work item optional.
- Category.
- Visibility.
- File URL or storage key.
- AI summary.
- Created by.
- Created date.

## Harbor AI Behavior

Harbor AI can summarize Documents, extract key points, and connect Document context to Organizations or Work.

## Future Considerations

- Version history.
- Customer portal Document sharing.
- Document templates.
- E signature.
- External storage integrations.

## Acceptance Criteria

- Documents connect to Organizations and Work.
- Documents respect permissions.
- Documents are searchable.
- Harbor AI can summarize permitted Documents.
