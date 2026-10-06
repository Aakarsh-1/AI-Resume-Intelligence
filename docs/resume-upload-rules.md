# Resume Upload Rules

## 1. Purpose

Define the initial file formats, validation requirements, and expected behavior for resume uploads in AI Resume Intelligence.

## 2. Supported File Formats

The initial implementation supports:

- PDF (`.pdf`)
- DOCX (`.docx`)

Other formats, including DOC, TXT, and image files, are not supported in the initial implementation.

## 3. File Size Limit

The maximum permitted resume file size is 5 MB per file.

Files exceeding this limit must be rejected before further processing.

## 4. Validation Rules

The backend must validate every uploaded file.

- A file must be provided.
- The file must not be empty.
- The file extension must match a supported format.
- The file content or detected media type must be consistent with the supported format.
- The file must not exceed the configured size limit.
- Invalid or malformed files must be rejected safely.
- Client-provided filenames and content types must not be trusted without validation.

The frontend may perform preliminary validation to improve the user experience, but backend validation is authoritative.

## 5. Error Handling

The application must provide meaningful errors for:

- Missing file
- Empty file
- Unsupported format
- File exceeding the size limit
- Invalid or malformed file
- Unexpected upload failure

Errors must not expose internal file paths, stack traces, or sensitive implementation details.

## 6. Successful Upload Behavior

For a valid upload:

- The backend accepts the file for the upload workflow.
- The application returns a clear success response.
- The uploaded file is made available to the subsequent resume text extraction workflow.

The storage mechanism and long-term persistence strategy must follow the project's implementation decisions.

## 7. Scope Boundaries

This task defines upload and validation rules.

The following remain separate tasks:

- US-007: Resume text extraction
- US-010: Resume information extraction
- Future work: AI analysis and resume-job matching

## 8. Testing Requirements

Tests should cover:

- Valid PDF upload
- Valid DOCX upload
- Missing file
- Empty file
- Unsupported format
- File exceeding the size limit
- Invalid or malformed file
- Unexpected upload failure

## 9. Implementation Principle

The backend is the authoritative validation layer. Frontend validation improves usability but must not replace backend checks.