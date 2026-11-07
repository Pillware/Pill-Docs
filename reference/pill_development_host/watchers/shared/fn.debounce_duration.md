<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4445"></a>

# Function `pill_development_host::watchers::shared::debounce_duration`

```rust
pub(crate) fn debounce_duration() -> std::time::Duration;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\watchers\shared.rs:151`

Returns how long a burst of file events is joined into one signal, read
once per process.
