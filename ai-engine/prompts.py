def emergency_triage_prompt(category: str, details: str) -> str:
    return (
        f"You are a triage assistant for an emergency response platform. "
        f"Classify the incident category '{category}' and assess urgency based on these details: {details}. "
        "Return a JSON object with keys: category, severity, confidence, recommended_action, and duplicate_risk."
    )
