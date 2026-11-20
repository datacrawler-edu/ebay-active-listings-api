# Output reference

A Dataset row represents one unique active listing. See the [captured JSON sample](../data/sample-output.json).

| Field | Description |
| --- | --- |
| resultId | Stable identity: marketplace and item ID. |
| itemId | eBay item identifier. |
| marketplace | Marketplace code, for example US or GB. |
| title | Listing title. |
| url | Public eBay listing URL. |
| price | Current price or low end of the displayed range. |
| currency | ISO 4217 currency code. |
| priceText | Price exactly as displayed by eBay. |
| bidCount | Bid count for auctions; null for fixed-price listings. |
| buyingFormat | Inferred format: auction, buy_it_now, or null when unknown. |
| condition | Condition label shown by eBay. |
| shippingText | Shipping wording shown on the listing card. |
| sellerUsername | Seller username when eBay includes it on the card. |
| sellerFeedbackPercent | Seller positive feedback percentage when shown. |
| sellerFeedbackScore | Seller feedback score when shown. |
| itemLocation | Item location shown by eBay. |
| imageUrl | Listing image URL. |
| watchCount | Watch count when the item page exposes it. |
| itemSpecifics | Public item specifics from the item page, as label/value pairs. |
| endDate | Item end date from the item page when available. |
| keyword | Keyword that produced this listing. |
| page | Search result page number. |
| scrapedAt | Collection timestamp in ISO 8601 UTC. |
| shippingCost | Shipping cost in the listing currency. Zero for explicit free shipping. Null if unavailable or in a different currency. |
| totalPrice | Price plus shipping when both are known; null otherwise. |

Read SUMMARY from the default key-value store. Check completed before consuming an entire run as complete. Partial runs can retain saved listings. The seller summary groups mixed prices by currency.
