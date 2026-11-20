<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-397"></a>

# Function `pill_engine_core::assets::metadata::read_header`

```rust
pub(crate) fn read_header(bytes: &[u8]) -> Result<(RawHeader, serde_json::Map<String, serde_json::Value>), String>;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\assets\metadata.rs:470`

Reads the header that a `.meta` sidecar and a standalone asset share, and
refuses one this engine cannot read.

This is the one statement of the on-disk contract: the format version range
and the 32-digit guid rule. The type the caller expected is checked by
[`parse_header`](fn.parse_header.md#rustdoc-item-1292), because the asset index reads the same header without
expecting one particular type.

The error carries only the detail sentence. [`parse_header`](fn.parse_header.md#rustdoc-item-1292) adds the path
it knows.
