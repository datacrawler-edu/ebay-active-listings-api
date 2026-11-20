"""Export an existing Dataset; this command never starts an Actor run."""
import argparse
import csv
from common import iter_rows

FIELDS = ['resultId', 'marketplace', 'itemId', 'title', 'price', 'currency', 'shippingCost', 'totalPrice', 'buyingFormat', 'condition', 'sellerUsername', 'watchCount', 'url']

def cell(value):
    # Guard spreadsheet formulas in untrusted listing text. JSON preserves raw values.
    if isinstance(value, str) and value.lstrip().startswith(('=', '+', '-', '@')):
        return "'"+value
    return value

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('dataset_id')
    parser.add_argument('--output', default='listings.csv')
    args = parser.parse_args()
    count = 0
    with open(args.output, 'w', newline='', encoding='utf-8-sig') as stream:
        writer = csv.DictWriter(stream, fieldnames=FIELDS)
        writer.writeheader()
        for row in iter_rows(args.dataset_id):
            writer.writerow({key:cell(row.get(key)) for key in FIELDS})
            count += 1
    print('Exported '+str(count)+' rows to '+args.output)

if __name__ == '__main__':
    main()
