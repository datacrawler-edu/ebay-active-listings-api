# Input reference

Only keywords is required. Use the [sample input](../data/sample-input.json) for a small run.

| Field | Type | Description |
| --- | --- | --- |
| keywords | array | One or more eBay search terms. Each keyword is searched separately and every result records the keyword that produced it. Use up to 10 terms. |
| marketplace | string | eBay marketplace to search. Results use that marketplace's local currency. |
| maxResultsPerKeyword | integer | Stop after this many unique active listings for each keyword. This is a limit, not a guarantee: fewer matching listings may be available. Only unique listings saved to the Dataset are charged. |
| includeItemDetails | boolean | Fetch the public item page for each listing to add item specifics, item end date and watch count. Disable it for a faster, cheaper search-only run. |
| condition | string | Optional eBay condition filter. Any keeps all conditions. |
| minPrice | integer | Optional minimum price in the marketplace currency. Leave blank for no minimum. |
| maxPrice | integer | Optional maximum price in the marketplace currency. Leave blank for no maximum. Must not be below the minimum. |
| buyingFormat | string | Optional filter for auctions or fixed-price (Buy It Now) listings. |
| freeShipping | boolean | Keep only listings marked as free shipping by eBay. |
| sellerUsernames | array | Optional eBay seller usernames. When set, each keyword is searched only for listings from those sellers. Use up to 5 names. |
| minWatchers | integer | Optional minimum watch count. Requires Include item specifics; listings below this value are skipped before saving and are not charged. |

Seller searches verify the reported seller before saving. minWatchers requires includeItemDetails.
