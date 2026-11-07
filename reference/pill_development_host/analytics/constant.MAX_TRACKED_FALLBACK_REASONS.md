<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-0"></a>

# Constant `pill_development_host::analytics::MAX_TRACKED_FALLBACK_REASONS`

```rust
pub(in analytics) const MAX_TRACKED_FALLBACK_REASONS: usize = 8;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::analytics'}}` · Source: `hosting\pill_development_host\src\analytics.rs:51`

How many distinct fallback reasons the tally remembers.

The list is capped instead of growing without bound. The tally's counters
still count every refusal and failure, so a long session loses only the
listing of one more distinct cause, never the totals.
