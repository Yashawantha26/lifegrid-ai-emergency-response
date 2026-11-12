from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health_endpoint():
    response = client.get('/health')
    assert response.status_code == 200
    assert response.json()['status'] == 'ok'


def test_create_incident_endpoint():
    payload = {
        'reporter_name': 'Neo',
        'location': 'City Hall',
        'category': 'medical',
        'severity': 'medium',
        'details': 'A person collapsed near the entrance and is having trouble breathing.',
    }
    response = client.post('/api/incidents', json=payload)
    assert response.status_code == 200
    data = response.json()
    assert data['category'] == 'medical'
    assert data['severity'] in {'critical', 'high', 'medium', 'low'}
