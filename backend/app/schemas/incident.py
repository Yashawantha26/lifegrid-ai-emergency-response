from datetime import datetime
from typing import Literal, Optional

from pydantic import BaseModel, Field


class IncidentCreate(BaseModel):
    reporter_name: str = Field(..., min_length=2)
    location: str = Field(..., min_length=5)
    category: str = Field(..., min_length=2)
    severity: str = Field(..., min_length=2)
    details: str = Field(..., min_length=10)


class IncidentOut(BaseModel):
    id: str
    reporter_name: str
    location: str
    category: str
    severity: str
    details: str
    status: Literal['submitted', 'triaged', 'acknowledged', 'resolved'] = 'submitted'
    created_at: datetime

    model_config = {'from_attributes': True}


class IncidentSummary(BaseModel):
    total: int
    critical: int
    high: int
    medium: int
    low: int
