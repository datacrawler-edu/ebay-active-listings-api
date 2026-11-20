// Node.js 18+. No automatic retries or redirects of a potentially paid start.
import { readFile } from 'node:fs/promises';
async function main() {
  const token = process.env.APIFY_API_TOKEN;
  if (!token) throw new Error('Set APIFY_API_TOKEN.');
  const base = (process.env.APIFY_API_BASE_URL || 'https://api.apify.com').replace(/\/$/, '');
  async function request(path, options = {}) {
    const response = await fetch(base + path, {
      ...options, redirect: 'error', signal: AbortSignal.timeout(45000),
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}; inspect Console before starting another run.`);
    return response.json();
  }
  let runId = process.argv[2]; // Optional existing run ID: never starts another run.
  if (!runId) {
    const input = JSON.parse(await readFile(new URL('../../data/sample-input.json', import.meta.url), 'utf8'));
    const started = await request('/v2/acts/datascraperes~ebay-active-listings-scraper/runs?timeout=120&maxTotalChargeUsd=0.10&restartOnError=false', {
      method: 'POST', body: JSON.stringify(input),
    });
    runId = started.data.id;
    console.log('Started run ' + runId);
  }
  let run;
  const deadline = Date.now() + 150000;
  do {
    ({ data: run } = await request(`/v2/actor-runs/${encodeURIComponent(runId)}`));
    if (['SUCCEEDED','FAILED','ABORTED','TIMED-OUT'].includes(run.status)) break;
    await new Promise(resolve => setTimeout(resolve, 2000));
  } while (Date.now() < deadline);
  if (run.status !== 'SUCCEEDED') throw new Error(`Run ${runId}: ${run.status}; inspect this run.`);
  const summary = await request(`/v2/key-value-stores/${encodeURIComponent(run.defaultKeyValueStoreId)}/records/SUMMARY`);
  if (summary.completed !== true || summary.status !== 'completed') throw new Error(`Run ${runId}: ${summary.status}; inspect SUMMARY. Saved rows remain available.`);
  const rows = [];
  for (let offset = 0; ; ) {
    const page = await request(`/v2/datasets/${encodeURIComponent(run.defaultDatasetId)}/items?clean=true&offset=${offset}&limit=100`);
    if (!Array.isArray(page)) throw new Error('Expected a Dataset items array.');
    if (!page.length) break;
    rows.push(...page);
    offset += page.length;
  }
  console.log(JSON.stringify(rows, null, 2));

}
main().catch(error => {
  console.error(error.message);
  process.exitCode = 1;
});
