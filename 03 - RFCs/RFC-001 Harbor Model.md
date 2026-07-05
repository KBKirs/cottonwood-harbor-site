# RFC 001 Harbor Model

Status:
Draft

Owner:
Chief Product and Design Officer

Reviewers:
CEO, Codex Lead Engineer

## Problem Statement

Harbor Vault needs a single organizing concept so the product does not become a collection of disconnected modules.

## Goals

- Establish Harbor Vault as a Business Operating System.
- Define the five core concepts of the Harbor Model.
- Make Organizations the center of the system.
- Give every future screen and database table a coherent product foundation.

## Non Goals

- Define every database field.
- Design every screen.
- Build industry specific workflows.

## User Stories

- As a business owner, I want one operating model that helps me understand where information belongs.
- As a manager, I want customers, work, documents, and activity connected in one place.
- As Codex, I need a clear product model before building UI, API, and database structure.

## UI Direction Or Mockup Notes

The Harbor Model should be reflected in navigation and screen hierarchy:

- Organizations
- People
- Work
- Knowledge
- Insights

Organizations should be the primary anchor.

## Workflow

Users should be able to start at an Organization and reach related People, Work, Documents, Notes, Activity, and AI insights.

## Permissions

Permissions should apply across Harbor Model objects based on role and context.

## Data Model Implications

Core objects:

- Organization
- Person
- Work
- Document
- Note
- Activity
- Insight

Organizations should relate to nearly every object.

## Harbor AI Behavior

Harbor AI should understand the Harbor Model and summarize information by Organization, People, Work, Knowledge, and Insights.

## Future Considerations

Future modules should only be added if they clearly fit the Harbor Model.

## Acceptance Criteria

- Harbor Vault is defined as a Business Operating System.
- The Harbor Model has five core concepts.
- Organizations are the system center.
- Future modules can be evaluated against the Harbor Model.
