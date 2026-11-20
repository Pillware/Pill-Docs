<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-406"></a>

# Function `pill_engine_core::assets::document::parse`

```rust
pub fn parse(bytes: &[u8]) -> Result<serde_json::Value, String>;
```

Source: `engine\pill_engine_core\src\assets\document.rs:36`

Parses one asset document from `bytes`.

## Errors

A message saying the bytes are not a YAML document.
