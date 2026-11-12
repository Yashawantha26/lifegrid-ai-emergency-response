CREATE TABLE IF NOT EXISTS incidents (
    id SERIAL PRIMARY KEY,
    external_id VARCHAR(32) UNIQUE,
    reporter_name VARCHAR(120) NOT NULL,
    location VARCHAR(200) NOT NULL,
    category VARCHAR(50) NOT NULL,
    severity VARCHAR(20) NOT NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'submitted',
    details TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS responders (
    id SERIAL PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    role VARCHAR(80) NOT NULL,
    team VARCHAR(80),
    is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS workflow_events (
    id SERIAL PRIMARY KEY,
    incident_id INTEGER REFERENCES incidents(id),
    event_type VARCHAR(60) NOT NULL,
    event_payload JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
