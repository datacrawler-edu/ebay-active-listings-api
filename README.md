# eBay Active Listings API examples

Search current eBay listings through Apify and export asking prices, shipping costs, seller details and watch counts. Start with a three-listing keyword search, then use the seller filter or run a batch across several keywords.

[Open eBay Active Listings Scraper & Seller Monitor on Apify](https://apify.com/datascraperes/ebay-active-listings-scraper?fpr=edudata)

## What this repository helps you do

- Compare asking prices and shipping costs in the same currency.
- Monitor listings for named eBay sellers and product keywords.
- Read a completed Apify run and export its Dataset to CSV.

## Example result

The [JSON sample](data/sample-output.json) and [CSV sample](data/sample-output.csv) show a captured auction listing. Price and availability reflect the time of collection.

```json
{
  "resultId": "US:880130698217",
  "price": 373.97,
  "shippingCost": 16.44,
  "totalPrice": 390.41,
  "currency": "USD",
  "buyingFormat": "auction",
  "bidCount": 21
}
```

## Run without code

1. Open [the Actor on Apify](https://apify.com/datascraperes/ebay-active-listings-scraper?fpr=edudata).
2. In **Input**, enter a keyword under **Search keywords** and choose a marketplace.
3. Set the result limit to three and click **Start**.
4. Inspect the **Dataset** and export it as JSON or CSV.

See the [no-code guide](docs/no-code-guide.md) for seller searches and output checks.

## Try it with Apify's free plan

Apify's Free plan includes **$5 in monthly prepaid usage** for Store or personal Actors. No credit card is required to start. Runs can consume available usage, and unused credits do not roll over. See [current Apify pricing](https://apify.com/pricing?fpr=edudata).

## Quick start for developers

Install the Python client and set your token in the shell.

```bash
pip install -r examples/python/requirements.txt
export APIFY_API_TOKEN="your-token"
python examples/python/collect_listings.py
```

On PowerShell, set the variable with $env:APIFY_API_TOKEN = "your-token". To replay the output read for a known run, pass --run-id followed by its run ID.

## Input example

```json
{
  "keywords": [
    "iphone 15 pro"
  ],
  "marketplace": "US",
  "maxResultsPerKeyword": 3,
  "includeItemDetails": true
}
```

See the [input reference](docs/input-reference.md) for filters and limits.

## Request examples

| Example | Workflow |
| --- | --- |
| [Python search](examples/python/collect_listings.py) | Start one capped search and read the Dataset. |
| [Python keyword batch](examples/python/batch_keywords.py) | Run two keyword searches in one request. |
| [Python CSV export](examples/python/export_listings_csv.py) | Export an existing Dataset by ID. |
| [JavaScript](examples/javascript/request.mjs) | Run or read an existing search with Node.js 18+. |
| [cURL](examples/curl-request.md) | Start, check and read a run with HTTP requests. |

## Output fields

| Field | Meaning |
| --- | --- |
| resultId | Marketplace plus eBay listing ID. |
| price, currency | Asking price or low end of the displayed range and the listing currency. |
| shippingCost, totalPrice | Shipping and combined total when known and compatible. |
| sellerUsername, watchCount | Seller and watch count when available. |

See the [output reference](docs/output-reference.md) for the full row format and run completion.

## Common use cases

The [use-case guide](docs/use-cases.md) covers price comparison, seller monitoring and spreadsheet exports.

## Compare eBay prices with shipping

Compare totalPrice within the same currency and buying format. A live auction's current bid can change before the listing closes.

## Export eBay active listings to CSV

Pass an existing Dataset ID to [the CSV example](examples/python/export_listings_csv.py). The export paginates the saved rows and does not launch a run.

## FAQ

See [frequently asked questions](docs/faq.md) for active listings, seller checks and partial runs.

## Limits and pricing

The input supports up to 10 keywords, five seller usernames and 1,000 results per keyword and seller. Availability and verification can reduce the returned count. Apify bills one listing event per unique saved result. See [the Actor's Pricing tab](https://apify.com/datascraperes/ebay-active-listings-scraper?fpr=edudata) for current rates.

## Hosted version

[Open the hosted eBay Active Listings Scraper](https://apify.com/datascraperes/ebay-active-listings-scraper?fpr=edudata)

## Responsible use

Follow the terms, access rules and privacy obligations for the data you use. Keep your Apify token in your environment.

## Support

[Open a GitHub issue](https://github.com/datacrawler-edu/ebay-active-listings-api/issues) for example problems. For a hosted run, report the run ID in the Actor's Issues tab with sanitized input.

## License

The integration examples in this repository use the MIT License.
