# Backend Setup Guide

## Overview

The backend for AI Resume Intelligence is built using **FastAPI**, a Python web framework. It currently provides a health-check endpoint and an automated test.

## Prerequisites

- Python 3.12
- Git
- PowerShell (Windows)

## 1. Navigate to the Project Root

Open a terminal in the repository root directory.

## 2. Create a Virtual Environment

Run:

```powershell
python -m venv backend\.venv
```

Activate it:

```powershell
.\backend\.venv\Scripts\Activate.ps1
```

If PowerShell blocks script execution, use an alternative terminal or an approved execution policy for your environment.

## 3. Install Dependencies

With the virtual environment activated, run:

```powershell
python -m pip install -r backend\requirements.txt
```

## 4. Start the Backend Server

Run from the repository root:

```powershell
python -m uvicorn app.main:app --reload --app-dir backend
```

The API will be available at:

- Base URL: `http://127.0.0.1:8000`
- Interactive API documentation: `http://127.0.0.1:8000/docs`
- Health check: `http://127.0.0.1:8000/health`

The health endpoint should return:

```json
{
  "status": "ok"
}
```

## 5. Run Automated Tests

Open a second terminal in the repository root and activate the virtual environment.

Set the Python module search path:

```powershell
$env:PYTHONPATH = "backend"
```

Run the tests:

```powershell
python -m pytest backend\tests -v
```

The health-check test should pass.

## Current Scope

The backend currently includes:

- FastAPI application initialization
- Health-check endpoint
- Automated health-check test

Authentication, resume processing, job matching, AI recommendations, and database integration will be implemented in later development tasks.
