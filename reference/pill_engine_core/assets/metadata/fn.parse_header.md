<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1292"></a>

# Function `pill_engine_core::assets::metadata::parse_header`

```rust
pub(crate) fn parse_header(path: &std::path::Path, bytes: &[u8], expected_type: &str, body_field: &str) -> crate::asset::AssetLoadResult<(crate::asset::AssetGuid, Option<serde_json::Value>)>;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\assets\metadata.rs:507`

Check the header every asset file shares and return its guid and the value
under `body_field` (`None` when absent or `null`).

The header is checked before the body is looked at, so the error says what
is actually wrong: a newer format, another asset type, or a bad guid.
