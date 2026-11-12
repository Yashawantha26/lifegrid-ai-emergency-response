from typing import Any, Dict, List


def detect_duplicates(incidents: List[Dict[str, Any]], candidate: Dict[str, Any]) -> List[str]:
    duplicates: List[str] = []
    candidate_category = candidate.get('category', '').lower()
    candidate_location = candidate.get('location', '').lower()
    candidate_severity = candidate.get('severity', '').lower()

    for incident in incidents:
        same_category = incident.get('category', '').lower() == candidate_category
        same_location = incident.get('location', '').lower() == candidate_location
        same_severity = incident.get('severity', '').lower() == candidate_severity
        if same_category and (same_location or same_severity):
            duplicates.append(str(incident.get('id', 'unknown')))
    return duplicates
