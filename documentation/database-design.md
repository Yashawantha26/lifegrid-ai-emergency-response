# Database Design

## incidents
- id: primary key
- external_id: reference ID for UI tracking
- reporter_name: citizen reporter
- location: incident location
- category: incident category
- severity: severity rating
- status: submitted, triaged, acknowledged, resolved
- details: narrative description
- created_at: timestamp

## responders
- name
- role
- team
- is_active

## workflow_events
- incident_id
- event_type
- event_payload
- created_at
