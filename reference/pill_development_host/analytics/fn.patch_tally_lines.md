<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-432"></a>

# Function `pill_development_host::analytics::patch_tally_lines`

```rust
pub(in analytics) fn patch_tally_lines() -> Vec<String>;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::analytics'}}` · Source: `hosting\pill_development_host\src\analytics.rs:1168`

Formats the running patch, refusal and failure tally as report lines.
Returns an empty list until the fast path has done something.

Takes its own lock instead of using the caller's, because
`print_reload_events` has already released the lock when it asks for these
lines.
