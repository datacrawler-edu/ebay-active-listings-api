"""Submit two keyword searches in a SINGLE Actor run (up to six results)."""
import json
from common import start_once, wait_for_dataset, iter_rows

def main():
    actor_input = {'keywords': ['iphone 15 pro', 'pixel 8'], 'marketplace': 'US',
                   'maxResultsPerKeyword': 3, 'includeItemDetails': False}
    dataset_id = wait_for_dataset(start_once(actor_input))
    rows = list(iter_rows(dataset_id))
    print(json.dumps(rows, indent=2))

if __name__ == '__main__':
    main()
