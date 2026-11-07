<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-429"></a>

# Function `pill_development_host::analytics::record_patch_refusal`

```rust
pub(crate) fn record_patch_refusal(code: &str, detail: &str);
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\analytics.rs:1101`

Record that the fast path declined a change and fell through to a reload.
