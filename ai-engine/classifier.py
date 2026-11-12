from typing import Dict, List


def classify_incident(category: str, description: str) -> Dict[str, object]:
    category = category.lower().strip()
    description_lower = description.lower()
    critical_keywords = ['unconscious', 'breathing', 'bleeding', 'fire', 'explosion', 'weapon']
    high_keywords = ['injury', 'traffic', 'collapse', 'smoke', 'power outage', 'gas leak']

    if category == 'medical' or any(keyword in description_lower for keyword in critical_keywords):
        severity = 'critical'
    elif category in {'fire', 'security'} or any(keyword in description_lower for keyword in high_keywords):
        severity = 'high'
    elif category == 'traffic':
        severity = 'medium'
    else:
        severity = 'low'

    return {
        'category': category,
        'severity': severity,
        'confidence': 0.92 if severity in {'critical', 'high'} else 0.84,
        'classification_notes': 'AI classification based on category, urgency markers, and incident context.',
    }
