# eBay active listings with cURL

Run from the repository root. Set APIFY_API_TOKEN to your Apify token in your shell. The POST starts a potentially billable run. Send it once. If the response is lost, look for the run in Apify Console before sending another request.

```bash
curl --fail-with-body --silent --show-error --max-time 45 \
  --request POST \
  --header "Authorization: Bearer $APIFY_API_TOKEN" \
  --header "Content-Type: application/json" \
  --data-binary @data/sample-input.json \
  'https://api.apify.com/v2/acts/datascraperes~ebay-active-listings-scraper/runs?timeout=120&maxTotalChargeUsd=0.10&restartOnError=false'
```

Copy the response's data.id into RUN_ID. Check the run until it reaches a terminal status.

```bash
curl --fail-with-body --silent --show-error --max-time 45 \
  --header "Authorization: Bearer $APIFY_API_TOKEN" \
  "https://api.apify.com/v2/actor-runs/$RUN_ID"
```

After SUCCEEDED, use data.defaultKeyValueStoreId as STORE_ID and data.defaultDatasetId as DATASET_ID. Check SUMMARY.completed before treating the collection as complete.

```bash
curl --fail-with-body --silent --show-error --max-time 45 \
  --header "Authorization: Bearer $APIFY_API_TOKEN" \
  "https://api.apify.com/v2/key-value-stores/$STORE_ID/records/SUMMARY"

curl --fail-with-body --silent --show-error --max-time 45 \
  --header "Authorization: Bearer $APIFY_API_TOKEN" \
  "https://api.apify.com/v2/datasets/$DATASET_ID/items?offset=0&limit=100&clean=true"
```

For larger Datasets, advance the offset by the number of rows received. Stop at an empty page.
