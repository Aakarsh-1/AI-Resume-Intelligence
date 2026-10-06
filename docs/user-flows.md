# AI Resume Intelligence — Core User Flows

## 1. Purpose

Define the primary user journeys for Applicants, HR/Hiring Managers, and Admins in the MVP.

## 2. Applicant Flows

### Flow A: Register and Log In

1. Applicant registers an account or logs in.
2. Backend validates registration details or credentials.
3. System grants access to the Applicant dashboard.
4. Applicant accesses features permitted by their role.

**Alternative:** Invalid credentials or registration details produce a clear error message.

### Flow B: Upload and Analyze a Resume

1. Applicant opens the resume section.
2. Applicant uploads a PDF or DOCX resume.
3. Backend validates file type and size.
4. System extracts text from the resume.
5. System checks whether the extracted content is usable.
6. System displays validation results, including missing sections, readability issues, and actionable suggestions.
7. AI analysis identifies skills, experience, education, and potential improvements.
8. System stores the resume and analysis.
9. Applicant views the validation results, analysis, and recommendations.

**Alternative:** Unsupported, corrupted, empty, or unreadable files produce a useful error message.

### Flow C: Browse Jobs and Apply

1. Applicant opens job listings.
2. System displays available job postings.
3. Applicant views a job description.
4. Applicant selects a resume for the application.
5. System compares the resume with job requirements.
6. System displays available match scores, matched skills, missing skills, and recommendations.
7. Applicant confirms the application.
8. System records the application and displays its status.
9. Applicant views submitted applications and their statuses.

**Alternative:** Missing information or submission failures produce a clear error message.

## 3. HR / Hiring Manager Flows

### Flow A: Create and Manage Job Postings

1. HR user logs in with the HR role.
2. HR user opens the job management dashboard.
3. HR user enters the job title, description, required skills, and other relevant details.
4. Backend validates the information.
5. System saves and publishes the job posting.
6. HR user views, edits, or closes permitted job postings.

**Alternative:** Invalid or incomplete details are highlighted before publication.

### Flow B: Review Applicants

1. HR user opens a job posting they are authorized to manage.
2. System displays applications associated with that job.
3. HR user opens an application and its resume.
4. HR user views available resume analysis and job-match results.
5. System presents relevant skills, missing requirements, and AI-generated recommendations.
6. HR user reviews the evidence and makes their own assessment.
7. HR user updates the application status when permitted.
8. System saves the updated status.

**Alternative:** If analysis fails or is unavailable, the system communicates this instead of fabricating results.

## 4. Admin Flows

### Flow A: Basic System Oversight

1. Admin logs in with the Admin role.
2. System opens the administrative dashboard.
3. Admin views registered users, job postings, and applications.
4. Admin inspects records and performs permitted oversight actions.
5. System validates authorization and records changes where appropriate.

**Alternative:** Unauthorized users cannot access administrative functions or data.

## 5. Cross-Cutting Rules

- Authentication is required for protected features.
- Role permissions are enforced by the backend, not only the frontend.
- Users can access only records they are authorized to view or modify.
- Uploaded files are validated before processing.
- AI scores and recommendations support decisions; they do not make automatic hiring decisions.
- Errors are communicated clearly without exposing sensitive system details.
- The interface provides appropriate loading, success, empty, and error states.

## 6. MVP Boundaries

The initial version focuses on registration and login, resume upload and validation, AI resume analysis, job posting management, job browsing and applications, resume-job matching, HR applicant review, and basic administrative oversight.

Advanced analytics, automated hiring decisions, complex notifications, and advanced workflow automation are outside the initial scope unless explicitly added to the MVP requirements.