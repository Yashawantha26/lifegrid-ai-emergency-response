# API Documentation

## Health
GET /health

Returns:
```json
{
  "status": "ok",
  "app": "LIFEGRID AI API"
}
```

## Incident listing
GET /api/incidents

## Incident summary
GET /api/incidents/summary

## Incident creation
POST /api/incidents

Example payload:
```json
{
  "reporter_name": "Jordan Lee",
  "location": "Riverside Ave",
  "category": "medical",
  "severity": "critical",
  "details": "A person collapsed near the entry gate and is having trouble breathing."
}
```
