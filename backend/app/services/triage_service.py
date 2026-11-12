from typing import Dict, List


class TriageService:
    @staticmethod
    def classify_incident(category: str, details: str) -> Dict[str, object]:
        category_normalized = category.lower()
        keyword_hits = {
            'medical': ['injury', 'bleeding', 'breathing', 'collapse', 'stroke'],
            'fire': ['fire', 'smoke', 'explosion', 'burning'],
            'traffic': ['accident', 'collision', 'vehicle', 'roadblock'],
            'utility': ['power', 'water', 'gas', 'electric', 'leak'],
            'security': ['threat', 'gun', 'assault', 'intrusion', 'lockdown'],
        }

        text = details.lower()
        score = 0
        for key, words in keyword_hits.items():
            if category_normalized == key:
                score += 4
            if any(word in text for word in words):
                score += 2

        if score >= 8 or category_normalized == 'medical':
            severity = 'critical'
        elif score >= 5:
            severity = 'high'
        elif score >= 3:
            severity = 'medium'
        else:
            severity = 'low'

        return {
            'category': category_normalized,
            'severity': severity,
            'duplicate_risk': score >= 6,
            'recommended_team': {
                'medical': 'EMS coordination',
                'fire': 'Fire response unit',
                'traffic': 'Road safety unit',
                'utility': 'Infrastructure response team',
                'security': 'Security and law enforcement liaison',
            }.get(category_normalized, 'Operations desk'),
        }

    @staticmethod
    def find_duplicates(incidents: List[Dict[str, object]], candidate: Dict[str, object]) -> List[str]:
        matches = []
        for incident in incidents:
            same_category = incident.get('category') == candidate.get('category')
            same_location = incident.get('location') == candidate.get('location')
            same_severity = incident.get('severity') == candidate.get('severity')
            if same_category and (same_location or same_severity):
                matches.append(incident.get('id', 'unknown'))
        return matches
