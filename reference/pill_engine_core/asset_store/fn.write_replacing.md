<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2457"></a>

# Function `pill_engine_core::asset_store::write_replacing`

```rust
pub fn write_replacing(destination: &std::path::Path, bytes: &[u8]) -> crate::asset::AssetLoadResult<()>;
```

Source: `engine\pill_engine_core\src\asset_store.rs:763`

Write `bytes` as `destination`, replacing a file that is already there.

The overwrite counterpart of [`write_new`](fn.write_new.md#rustdoc-item-2456). The bytes go to a temporary
sibling first and are renamed over the destination only when they are
complete, so a crash never leaves a half-written asset and a reader never
sees one.

## Errors

[`AssetLoadError::Write`](../asset/enum.AssetLoadError.md#rustdoc-item-788) with the underlying error when the file cannot be
written or moved into place.
