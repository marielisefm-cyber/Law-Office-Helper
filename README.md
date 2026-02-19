# Law Office Helper

A blueprint and starter specification for building a legal operations platform inspired by LawToolBox, with a focus on deadline automation, matter-centric collaboration, and Microsoft 365 integration.

## Product vision

Law Office Helper helps legal teams avoid malpractice risk from missed deadlines while centralizing documents, contacts, meetings, and compliance workflows around each matter.

## Core modules

### 1) Calendaring & Rules-Based Deadlines

- Rules-based deadline engine: enter a trigger date and auto-calculate dependent deadlines.
- Deadline audit history: track who created or changed each deadline and when.
- Automatic tagging: classify deadlines/events for search and reporting.
- Deadline customization: support organization notes and hide/show controls for specific deadlines.
- Event typing: mark items as trigger dates, deadlines, or appointments.
- Dependency filter: click a trigger date to view all related deadlines.
- Matter analytics: measure cycle times by venue/jurisdiction (e.g., median days to trial).
- Risk controls: highlight and report missed deadlines as a top malpractice risk signal.

### 2) Document Management

- Auto-provision Microsoft 365 resources per matter:
  - SharePoint site
  - Team
  - Channels
- Apply matter templates to pre-create folder/file structures.
- Save email content to Teams channels, shared inboxes, or SharePoint folders.
- Cross-app file access from Outlook add-in, Teams app, and web app.
- Mobile access through Teams/Groups experiences.
- SharePoint-native version control and check-in/check-out.
- Virtual exhibit exchange for clients/witnesses (secure large-file transfer).
- Tenant-wide scoped search of accessible SharePoint content.
- OneDrive sync support for cloud + desktop workflows.

### 3) Contact Management

- Bulk upload contacts from admin portal.
- Add contacts from incoming email and suggest recent contacts with AI assist.
- Tag people/organizations for segmentation.
- Relationship graph: show all matters associated with a contact.
- Matter-level contact notes/tags.
- Auto-generate meeting attendee lists from matter tags/roles.

### 4) Virtual Meetings

- Meeting templates with role mappings (e.g., client, witness, expert, court roles).
- Role-based attendee auto-assembly from matter contacts.
- Email meeting dashboards to attendees.
- One-click bulk breakout room creation.

### 5) OneNote Integration

- Auto-create OneNote notebook per matter.
- Push deadlines, analytics, contacts, and matter context into OneNote.
- Clause bank/email snippets for faster drafting.

### 6) Admin Portal & Configuration

- License lifecycle support (purchase/provision/manage).
- Tenant admin consent workflow for Microsoft 365 permissions.
- Bulk user import and tenant-based user discovery.
- Usage analytics dashboard for admins.
- Org/user-level feature toggles and restrictions.
- Matter ↔ Microsoft 365 alignment auditing and access sharing controls.
- Configurable default channel creation for new Teams.
- Bulk contact migration and taxonomy management.
- Admin-managed meeting/breakout presets.
- Downloadable deadline/meeting reports by user/department/org.
- Naming convention policies for governance and compliance.

### 7) Data Governance & Security

- Configurable matter naming standards (prefix/suffix policies).
- Integration with Microsoft 365 Compliance Center conventions.
- Enterprise-grade architecture on Microsoft cloud services.
- Delegated-permission model to protect client data.

## Suggested architecture

### Front end

- **Web app**: React + TypeScript (matter workspace, admin portal, reporting).
- **Teams app**: Microsoft Teams tabs/personal app wrappers around core web UI.
- **Outlook add-in**: task pane for save-to-matter, deadlines, and contacts.

### Back end

- **API layer**: Node.js (NestJS) or .NET (ASP.NET Core) REST/GraphQL services.
- **Rules engine service**: deadline calculation service with jurisdictional rule packs.
- **Workflow service**: event-driven orchestration for provisioning and notifications.
- **Search service**: federated search against app metadata + SharePoint indexes.

### Data and integrations

- **Primary DB**: PostgreSQL or Azure SQL.
- **Audit/event store**: append-only event log for compliance traceability.
- **Queue/event bus**: Azure Service Bus/Event Grid.
- **Identity**: Microsoft Entra ID (Azure AD), RBAC with least privilege.
- **Microsoft 365 integrations**: Microsoft Graph for Teams, SharePoint, Outlook, OneNote.

## Domain model (MVP entities)

- `Organization`
- `User`
- `Matter`
- `Ruleset`
- `TriggerEvent`
- `Deadline`
- `DeadlineDependency`
- `DeadlineAuditEvent`
- `Contact`
- `MatterContact`
- `DocumentLink`
- `MeetingTemplate`
- `MeetingInstance`
- `Tag`
- `FeatureToggle`

## MVP scope (first release)

1. Matter creation with naming-policy validation.
2. Rules-based deadline generation from trigger dates.
3. Deadline timeline/calendar with tags and dependency views.
4. Deadline change history (full audit trail).
5. Basic missed-deadline risk dashboard.
6. SharePoint folder provisioning per matter.
7. Contact management (import, tagging, matter association).
8. Teams meeting template + attendee auto-build.
9. Admin feature toggles and usage dashboard.

## Delivery roadmap

### Phase 1 (0-3 months)

- Deadline engine foundation and rule-pack framework.
- Matter workspace and calendar UX.
- Audit logging and baseline reporting.

### Phase 2 (3-6 months)

- Microsoft 365 provisioning automation (Teams/SharePoint).
- Document linking and email-to-matter save.
- Contact and meeting template workflows.

### Phase 3 (6-9 months)

- Advanced analytics (venue cycle times, risk trends).
- OneNote sync + clause bank.
- Expanded admin governance and downloadable reports.

## Critical non-functional requirements

- High auditability: immutable logs for all deadline and permission changes.
- Security/compliance: encryption at rest/in transit, tenant isolation, least privilege.
- Reliability: resilient job processing for rule calculations and provisioning tasks.
- Explainability: every generated deadline must display source trigger + rule reference.
- Usability: legal-friendly terminology and low-click workflows.

## Recommended next build steps

1. Finalize a strict MVP requirements doc and acceptance criteria.
2. Select stack (.NET vs Node) based on team capability.
3. Implement data model migrations and seed one jurisdictional ruleset.
4. Build deadline engine API + automated test suite for date logic.
5. Build minimal React UI for matter setup, trigger input, and generated deadlines.
6. Integrate Microsoft Graph for SharePoint folder creation.
7. Add audit dashboards and missed-deadline alerts.

---

If you want, the next step can be a production-ready **technical design document** and **database schema SQL** for this plan.
