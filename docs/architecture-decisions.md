# AI Resume Intelligence — Architecture Decisions

## 1. Purpose

This document records the initial technology and architecture decisions for AI Resume Intelligence, including the reasoning behind each choice and technologies deferred until they are needed.

These decisions apply to the initial MVP and may evolve as the project develops.

## 2. ADR-001: Use React with JavaScript for the Frontend

**Status:** Accepted

**Decision:** Use React, JavaScript, Vite, Tailwind CSS, and React Router.

**Reasoning:**
- React supports reusable UI components for Applicant, HR, and Admin interfaces.
- JavaScript aligns with the project's current learning goals.
- Vite provides a straightforward development and build workflow.
- Tailwind CSS supports consistent, responsive styling.
- React Router supports navigation between application pages.

**Trade-off:** JavaScript does not provide TypeScript's compile-time type checking. TypeScript can be considered later if the project benefits from stronger type safety.

## 3. ADR-002: Use FastAPI for the Backend

**Status:** Accepted

**Decision:** Build the backend using Python and FastAPI.

**Reasoning:**
- Python provides a suitable ecosystem for document processing and AI integration.
- FastAPI supports REST API development and request validation.
- Automatic API documentation helps during development and testing.
- A separate backend keeps business rules and authorization independent of the frontend.

**Trade-off:** API contracts and validation must be maintained carefully as the application grows.

## 4. ADR-003: Use PostgreSQL as the Primary Database

**Status:** Accepted

**Decision:** Use PostgreSQL for persistent application data.

**Reasoning:**
- Users, resumes, jobs, applications, and analysis results have clear relationships.
- Relational constraints and transactions help preserve data integrity.
- PostgreSQL supports structured queries and future reporting requirements.

**Trade-off:** Database schema changes require planning and migration management.

## 5. ADR-004: Use REST APIs for Frontend–Backend Communication

**Status:** Accepted

**Decision:** The React frontend communicates with the FastAPI backend through HTTP REST APIs.

**Reasoning:**
- REST provides a familiar interface between independently developed frontend and backend components.
- It supports clear request and response contracts.
- FastAPI can document endpoints for easier testing and integration.

**Trade-off:** API request and response formats must remain consistent as features evolve.

## 6. ADR-005: Use a Single Git Repository for the MVP

**Status:** Accepted

**Decision:** Keep frontend, backend, tests, and documentation in one repository.

**Reasoning:**
- A monorepo makes the project easier to manage as an individual developer.
- Related changes can be reviewed and committed together.
- Shared documentation and project configuration stay in one place.

**Trade-off:** The repository may require clearer folder boundaries as the codebase grows.

## 7. ADR-006: Introduce AI Capabilities Incrementally

**Status:** Accepted

**Decision:** Begin with a focused AI integration for resume analysis and resume–job matching. Select a specific model or provider when implementation requirements are clear.

**Reasoning:**
- Resume extraction, validation, and structured data processing should be established before adding complex AI workflows.
- A focused integration keeps the MVP easier to test and debug.
- AI output can be evaluated before introducing more advanced retrieval or agent-based systems.

**Trade-off:** The initial approach may need to evolve as evaluation results and requirements become clearer.

## 8. ADR-007: Enforce Authorization in the Backend

**Status:** Accepted

**Decision:** Implement authentication and role-based authorization on the server. Frontend route protection is supplementary, not the security boundary.

**Reasoning:**
- Applicants, HR users, and Admins have different permissions.
- Backend checks prevent unauthorized API access even when a client bypasses the UI.
- Access to individual resumes, applications, and job records must be checked against the authenticated user's permissions.

**Trade-off:** Authorization rules require consistent testing across protected endpoints.

## 9. Decisions Deferred

The following technologies are not required for the initial architecture and will be evaluated when justified by actual requirements:

- **Transformers and embeddings:** when semantic representations improve matching quality.
- **Vector database:** when semantic search or retrieval requires dedicated vector storage.
- **RAG:** when matching or analysis needs reliable retrieval from larger collections of reference documents.
- **AI agents and Strands Agents:** when workflows require meaningful multi-step tool use or autonomous task coordination.
- **MCP:** when standardized connections between AI systems and external tools or data sources provide value.
- **Docker and Kubernetes:** introduce containerization and orchestration according to deployment and scaling needs.
- **AWS or GCP:** choose a cloud deployment approach when hosting, availability, and operational requirements are defined.
- **CI/CD:** introduce automated build, test, and deployment pipelines as the delivery workflow matures.

## 10. Review Policy

Architecture decisions may be revisited when requirements change, implementation exposes a limitation, or testing provides evidence that another approach is better.

Any significant change should record the decision, its rationale, and its consequences in this document.