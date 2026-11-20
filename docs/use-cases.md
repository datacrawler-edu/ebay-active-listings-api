# Use cases

## Product price comparison

Start from [the sample input](../data/sample-input.json). Compare totalPrice within one currency and split auctions from fixed-price listings.

## Seller monitoring

Choose a keyword and add sellerUsernames. Listings with a different or unverifiable seller are skipped and can make the collection partial.

## Keyword coverage and exports

Use [the batch example](../examples/python/batch_keywords.py) for distinct product families. The Dataset deduplicates matching listings, so one listing can be attributed to the first matching keyword. Export a saved Dataset with [the CSV example](../examples/python/export_listings_csv.py).
