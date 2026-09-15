# AI Resume Intelligence — Initial Architecture

## 1. Project Overview

AI Resume Intelligence is an AI-powered recruitment application designed to support three types of users:

- Applicant
- Hiring Manager / HR
- Admin

The application will provide resume validation, job posting, job applications, resume-job matching, and AI-powered recruitment insights.

---

## 2. User Roles

### Applicant

Applicants can:

- Register and log in
- Upload and validate their resume
- View available jobs
- Apply for jobs
- Receive AI-based resume/job matching results
- View their applications

### Hiring Manager / HR

HR users can:

- Register and log in
- Create and manage job postings
- View applications for their jobs
- Review applicant resumes
- View AI-generated applicant analysis

### Admin

Admins can:

- Manage users
- Manage job postings
- Manage applications
- Monitor the overall system

---

## 3. High-Level Architecture

```text
                         ┌─────────────────────┐
                         │        Users        │
                         │ Applicant / HR /    │
                         │ Admin               │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │      Frontend       │
                         │ React + JavaScript  │
                         │ Vite + Tailwind CSS │
                         └──────────┬──────────┘
                                    │
                              HTTP / REST
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │     Backend API     │
                         │ Python + FastAPI    │
                         └──────────┬──────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
              ▼                     ▼                     ▼
      ┌───────────────┐     ┌───────────────┐     ┌───────────────┐
      │ Authentication│     │ Resume / Job  │     │ Application   │
      │ & Authorization│    │ Processing    │     │ Management    │
      └───────────────┘     └───────┬───────┘     └───────────────┘
                                    │
                                    ▼
                            ┌───────────────┐
                            │  AI Analysis  │
                            │ Resume        │
                            │ Matching      │
                            │ Recommendations│
                            └───────┬───────┘
                                    │
                                    ▼
                            ┌───────────────┐
                            │  PostgreSQL   │
                            │   Database    │
                            └───────────────┘