# AI Resume Intelligence — Frontend

## Overview

The frontend is built with React and Vite. It provides the user interface for the AI Resume Intelligence platform.

## Prerequisites

- Node.js and npm
- Project dependencies installed

## Install Dependencies

From the repository root:

```powershell
npm install --prefix frontend
```

## Run the Development Server

```powershell
npm run dev --prefix frontend
```

Use the local URL printed by Vite to open the application in your browser.

## Testing

The frontend uses Vitest, jsdom, and React Testing Library.

### Run All Tests Once

From the repository root:

```powershell
npm run test --prefix frontend -- --run
```

### Run Tests in Watch Mode

```powershell
npm run test --prefix frontend
```

### Test Structure

- `src/tests/` — frontend test files.
- `src/test/setup.js` — shared testing setup and DOM matchers.
- `src/tests/Dashboard.test.jsx` — initial Dashboard tests.

The initial tests verify the welcome heading, navigation links, and feature cards.

## Code Quality Checks

### Lint

```powershell
npm run lint --prefix frontend
```

### Production Build

```powershell
npm run build --prefix frontend
```

## Backend Tests

Backend testing instructions are documented in `../backend/README.md`.

From the repository root, run:

```powershell
$env:PYTHONPATH = "backend"
python -m pytest backend/tests -v
Remove-Item Env:PYTHONPATH
```

The backend uses pytest and currently includes configuration and health-check tests.