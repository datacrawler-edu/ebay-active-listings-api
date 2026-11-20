"""Start one small search, or resume reading a known run with --run-id."""
import argparse
import json
from common import start_once, wait_for_dataset, iter_rows, sample_input

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--run-id', help='Read an existing run without creating another.')
    args = parser.parse_args()
    run_id = args.run_id or start_once(sample_input())
    dataset_id = wait_for_dataset(run_id)
    print(json.dumps(list(iter_rows(dataset_id)), indent=2))

if __name__ == '__main__':
    main()
