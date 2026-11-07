<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-299"></a>

# Function `pill_assets::is_stale`

```rust
pub(crate) fn is_stale(input: &std::path::Path, output: &std::path::Path) -> Result<bool, CookError>;
```

Visibility: `crate` · Source: `assets\pill_assets\src\lib.rs:669`

Whether `output` is missing or older than `input`.

An output whose time cannot be read counts as stale, so the rule rebuilds
it.

## Errors

Returns [`CookError::Io`](enum.CookError.md#rustdoc-item-157) when the input's time cannot be read.
