from pathlib import Path


def seed_sample_data() -> list[dict]:
    return [
        {
            'external_id': 'LG-1001',
            'reporter_name': 'Asha Pillai',
            'location': 'Riverside Ave',
            'category': 'medical',
            'severity': 'critical',
            'status': 'acknowledged',
            'details': 'Severe chest pain and breathing difficulties reported near the underpass.',
        },
        {
            'external_id': 'LG-1002',
            'reporter_name': 'Nikhil Kumar',
            'location': 'Central Station',
            'category': 'traffic',
            'severity': 'high',
            'status': 'triaged',
            'details': 'Vehicle collision blocking north-bound lanes and affecting commuter flow.',
        },
    ]


if __name__ == '__main__':
    print('Seed data prepared for LIFEGRID AI.')
    for item in seed_sample_data():
        print(item)
