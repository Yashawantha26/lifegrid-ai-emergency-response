from typing import Literal

from pydantic import BaseModel, Field


class IncidentDecision(BaseModel):
    category: str = Field(..., min_length=2)
    severity: Literal['critical', 'high', 'medium', 'low']
    confidence: float = Field(..., ge=0.0, le=1.0)
    recommended_action: str
    duplicate_risk: bool
