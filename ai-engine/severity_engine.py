from typing import Dict


def compute_severity(score: int, risk_factors: list[str] | None = None) -> Dict[str, object]:
    risk_factors = risk_factors or []
    adjusted_score = score + len(risk_factors)

    if adjusted_score >= 8:
        level = 'critical'
    elif adjusted_score >= 5:
        level = 'high'
    elif adjusted_score >= 3:
        level = 'medium'
    else:
        level = 'low'

    return {'severity': level, 'score': adjusted_score, 'risk_factors': risk_factors}
