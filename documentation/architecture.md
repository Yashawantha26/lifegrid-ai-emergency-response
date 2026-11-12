# LIFEGRID AI Architecture

## Overview
LIFEGRID AI is an AI-powered emergency coordination platform that combines a citizen reporting interface, a FastAPI backend, and a decision-support AI module.

## Layers
- Frontend: Next.js and Tailwind-based command center UX
- Backend: FastAPI endpoints for incident intake, queries, and triage
- AI Engine: severity classification and duplicate detection logic
- Database: PostgreSQL schema for incident and responder records
- Automation: n8n-style workflow definitions for incident escalations and notifications

## Flows
1. A citizen submits an incident report.
2. The API validates input and classifies the issue using the AI layer.
3. The system assigns a severity and recommended response team.
4. Duplicate detection checks for similar reports.
5. Notifications and escalations are triggered through workflow automation.
