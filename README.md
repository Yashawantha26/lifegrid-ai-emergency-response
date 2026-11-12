# LIFEGRID AI

AI-powered emergency management and incident coordination platform.

## Stack
- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: FastAPI, Pydantic, SQLAlchemy
- AI Engine: Python modules for classification, severity, and duplicate detection
- Database: PostgreSQL with SQL schema and seed scripts
- Automation: workflow definitions for escalation and notification orchestration

## Quick start

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
python -m venv .venv
. .venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

### Database
```bash
psql -U postgres -d lifegrid -f database/schema.sql
python database/seed.py
```

## Project structure
- frontend/: Next.js app and dashboard UI
- backend/: FastAPI service and API endpoints
- ai-engine/: incident classification, severity, and duplicate detection
- database/: SQL schema and seed scripts
- automation/: workflow definitions for escalation automation
- documentation/: architecture and usage guides
- emergency-logs/: operational event history folder
- testing/: QA and validation artifacts

## Important note
This is a hackathon-style simulation for emergency coordination workflows and should not be presented as a live government or emergency-service integration.
