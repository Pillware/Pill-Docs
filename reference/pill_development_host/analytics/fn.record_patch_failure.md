<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-430"></a>

# Function `pill_development_host::analytics::record_patch_failure`

```rust
pub(crate) fn record_patch_failure(function: &str, code: &str, detail: &str);
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\analytics.rs:1110`

Record that a patch was attempted and failed, keeping the previous code.
