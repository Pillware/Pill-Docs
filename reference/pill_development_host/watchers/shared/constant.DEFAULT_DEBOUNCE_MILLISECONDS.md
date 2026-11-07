<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4376"></a>

# Constant `pill_development_host::watchers::shared::DEFAULT_DEBOUNCE_MILLISECONDS`

```rust
pub(in watchers::shared) const DEFAULT_DEBOUNCE_MILLISECONDS: u64 = 60;
```

Visibility: `{'restricted': {'parent': 4377, 'path': '::watchers::shared'}}` · Source: `hosting\pill_development_host\src\watchers\shared.rs:55`

File events that arrive within this window are joined into one reload.

The wait is pure delay: every edit sleeps for this long before any work
starts. It is needed because one save produces several notifications -
editors write, rename and touch metadata - and without the wait each one
would start its own rebuild. A burst lasts a few milliseconds, so the
window only has to outlast that, and it stays far below what a developer
would notice. Override it with `PILL_WATCH_DEBOUNCE_MS` when an editor's
save pattern needs more room.
