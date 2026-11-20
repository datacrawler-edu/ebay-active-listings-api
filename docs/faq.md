# FAQ

## Does this return sold prices?

It returns active listings and their displayed asking prices or bids.

## Do I need an eBay account?

An Apify token is sufficient for the API examples. You can also use [the Actor in Apify Console](https://apify.com/datascraperes/ebay-active-listings-scraper?fpr=edudata).

## Why did seller monitoring return fewer results?

The requested limit is a cap. Listings with a missing or different seller cannot be verified for the requested seller and are skipped.

## Why is totalPrice empty?

The Actor needs a known shipping amount and compatible price and shipping currencies. Local pickup and delivery estimates do not establish a shipping charge.

## How do I avoid launching another paid run?

Pass the saved run ID to [the Python search example](../examples/python/collect_listings.py) or use a Dataset ID with [the export example](../examples/python/export_listings_csv.py). If a start response is lost, check the Console for an existing run.
