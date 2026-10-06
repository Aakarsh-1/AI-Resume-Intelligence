# Backend Setup

## Overview

The backend is built with FastAPI and provides the API for AI Resume Intelligence.

## Prerequisites

- Python 3.12+
- PowerShell (Windows)

## 1. Activate the Virtual Environment

From the repository root:

```powershell
.\backend\.venv\Scripts\Activate.ps1
```

## 2. Install Dependencies

```powershell
python -m pip install -r backend/requirements.txt
```

## 3. Configure Environment Variables

Copy the example configuration file from the repository root:

```powershell
Copy-Item .env.example .env
```

The application reads configuration from the root `.env` file when commands are run from the repository root.

| Variable | Description | Default |
|---|---|---|
| `APP_NAME` | Application name | `AI Resume Intelligence API` |
| `APP_VERSION` | API version | `0.1.0` |
| `APP_ENV` | Application environment | `development` |
| `DEBUG` | Enable debug mode | `false` |

The application supports environment-variable overrides, so configuration can be changed without editing source code.

**Security:** Never commit `.env` or put real secrets in `.env.example`. The root `.gitignore` excludes `.env`.

## 4. Run the Backend

From the repository root:

```powershell
$env:PYTHONPATH = "backend"
python -m uvicorn app.main:app --reload --app-dir backend
```

Open `http://127.0.0.1:8000/docs` to access the interactive API documentation.

The health endpoint is available at `http://127.0.0.1:8000/health`.

## 5. Run Tests

From the repository root:

```powershell
$env:PYTHONPATH = "backend"
python -m pytest backend/tests -v
Remove-Item Env:PYTHONPATH
```

## Current Scope

The backend currently includes the application configuration, FastAPI application, and health-check endpoint. Additional API functionality will be implemented in later tasks.