# Harbor Vault Foundation Blueprint

Phase 2A

## Goal

By the end of Phase 2A, Codex should have enough product structure to build Harbor Vault without inventing the product while coding.

This blueprint defines the Harbor Vault Foundation:

1. Harbor Model
2. Information Architecture
3. User Roles and Permissions
4. Dashboard
5. Organizations
6. Work
7. Harbor AI
8. Documents and Knowledge
9. Database support model

## Product Definition

Harbor Vault is a Business Operating System.

It is not field service management.

It is not a CRM.

It is not an ERP.

It is not a task manager.

Harbor Vault is an AI native operating system that helps businesses organize relationships, work, knowledge, and insights so leaders and teams know what to do next.

## Target Market

Harbor Vault is built first for organizations with 1 to 100 users.

This includes independent professionals, very small businesses, and growing teams that need enterprise-quality operating software without enterprise complexity, enterprise budgets, or internal software teams.

Harbor Vault may scale beyond 100 users over time, but Foundation product decisions should be optimized for this primary market.

Avoid designing the first version around organizations with 200 to 5,000 employees. Those companies often have internal software teams, existing enterprise platforms, dedicated IT budgets, and long procurement cycles.

## Packaging Direction

Initial public packaging should stay simple:

- Individual
- Team
- Enterprise

Individual is for independent professionals and small businesses getting organized.

Team is the flagship plan for growing organizations that need everyone working from the same operating system.

Enterprise is contact sales for organizations with advanced security, compliance, deployment, or support requirements.

Do not introduce Professional or Business tiers in the initial release unless customer validation creates a clear need.

Harbor Vault is priced per Organization, not per seat.

Every paid plan should include the complete platform. Plans should scale by capacity, support, onboarding, and advanced requirements, not by withholding core functionality.

## Internal Naming

Company:
Cottonwood Harbor

Product:
Harbor Vault

AI:
Harbor AI

Underlying product concept:
The Harbor Model

## The One Rule

Every screen in Harbor Vault should answer:

What should I do next?

If a screen does not help a user decide their next action, it is either showing too much information or the wrong information.

## Simplicity First

Power without complexity is a non-negotiable design philosophy.

Harbor Vault is designed to make Organizations easier to run, not to introduce new complexity.

Every feature should reduce cognitive load, require minimal configuration, and feel intuitive from the first use.

When faced with multiple implementation options, Harbor Vault should favor the solution that is simpler to understand, easier to maintain, and faster for users to adopt.

The simplest solution that solves the problem wins.

If a feature makes the product noticeably harder to learn without delivering proportional value, it should not ship.

## Navigation Principle

Navigation should be boring.

Foundation navigation should stay narrow:

- Dashboard
- Work
- Documents
- Harbor AI
- Calendar
- Reports
- Settings

Everything else should live inside those areas unless there is a strong reason to elevate it.

Users should not wonder where to go. They should feel: of course it is there.

## Progressive Disclosure

New users should only see what they need.

Advanced capabilities should become discoverable as Organizations mature.

Power users can discover Templates, Automations, API, and Advanced Reports without overwhelming everyone else.

Prefer sensible defaults, AI-assisted setup, and opinionated workflows over setup-heavy configuration.

## Foundation Build Order

1. Information Architecture
2. User Roles and Permissions
3. Dashboard
4. Organizations
5. Work
6. Harbor AI
7. Documents and Knowledge
8. Database model

The database should support the product.

The database should not define the product.

## Foundation Modules

- Dashboard
- Work
- Calendar
- Documents
- Reporting
- Harbor AI
- Settings

Organizations and People are core domain objects, but they should not automatically require top-level navigation items if the simpler navigation model works better.

## Foundation Success Criteria

The Harbor Vault Foundation is successful when a business owner or operator can:

- Log in and immediately understand what needs attention
- View a clear AI brief
- See business health status
- See important KPIs
- Navigate from an organization to its people, work, documents, notes, and activity
- Track multiple types of work without forcing everything into "tasks" or "projects"
- Search across the vault
- Use Harbor AI to understand summaries, risks, and next actions

## Documents In This Specification

- `Harbor Model.md`
- `Information Architecture.md`
- `User Roles and Permissions.md`
- `Product Specification/Module 01 Dashboard.md`
- `Product Specification/Module 02 Organizations.md`
- `Product Specification/Module 03 Work.md`
- `Product Specification/Module 04 Harbor AI.md`
- `Product Specification/Module 05 Documents and Knowledge.md`
- `Database Support Model.md`
