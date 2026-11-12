from datetime import datetime, timezone
from typing import Dict, List

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import get_settings
from app.schemas.incident import IncidentCreate, IncidentOut, IncidentSummary
from app.services.triage_service import TriageService

settings = get_settings()
app = FastAPI(title=settings.app_name, description='AI-powered emergency coordination API')

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

incidents_db: List[Dict[str, object]] = [
    {
        'id': 'LG-1001',
        'reporter_name': 'Asha Pillai',
        'location': 'Riverside Ave',
        'category': 'medical',
        'severity': 'critical',
        'details': 'Person experiencing severe chest pain and breathing issues.',
        'status': 'acknowledged',
        'created_at': datetime.now(timezone.utc).isoformat(),
    },
    {
        'id': 'LG-1002',
        'reporter_name': 'Nikhil Kumar',
        'location': 'Central Station',
        'category': 'traffic',
        'severity': 'high',
        'details': 'Multiple vehicle collision causing congestion and injuries.',
        'status': 'triaged',
        'created_at': datetime.now(timezone.utc).isoformat(),
    },
]


@app.get('/health')
def health() -> Dict[str, str]:
    return {'status': 'ok', 'app': settings.app_name}


@app.get('/api/incidents', response_model=List[IncidentOut])
def list_incidents() -> List[Dict[str, object]]:
    return incidents_db


@app.get('/api/incidents/summary', response_model=IncidentSummary)
def get_summary() -> IncidentSummary:
    summary = {'total': len(incidents_db), 'critical': 0, 'high': 0, 'medium': 0, 'low': 0}
    for incident in incidents_db:
        severity = str(incident.get('severity', 'low')).lower()
        if severity in summary:
            summary[severity] += 1
    return IncidentSummary(**summary)


@app.post('/api/incidents', response_model=IncidentOut)
def create_incident(payload: IncidentCreate) -> Dict[str, object]:
    decision = TriageService.classify_incident(payload.category, payload.details)
    new_incident = {
        'id': f"LG-{len(incidents_db) + 1001}",
        'reporter_name': payload.reporter_name,
        'location': payload.location,
        'category': payload.category.lower(),
        'severity': decision['severity'],
        'details': payload.details,
        'status': 'submitted',
        'created_at': datetime.now(timezone.utc).isoformat(),
    }

    duplicates = TriageService.find_duplicates(incidents_db, new_incident)
    if duplicates:
        new_incident['status'] = 'triaged'
        new_incident['duplicate_matches'] = duplicates

    incidents_db.insert(0, new_incident)
    return new_incident


@app.get('/api/incidents/{incident_id}', response_model=IncidentOut)
def get_incident(incident_id: str) -> Dict[str, object]:
    for incident in incidents_db:
        if incident.get('id') == incident_id:
            return incident
    raise HTTPException(status_code=404, detail='Incident not found')
