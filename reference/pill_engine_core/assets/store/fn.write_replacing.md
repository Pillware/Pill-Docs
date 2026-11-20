<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2010"></a>

# Function `pill_engine_core::assets::store::write_replacing`

```rust
pub fn write_replacing(destination: &std::path::Path, bytes: &[u8]) -> crate::asset::AssetLoadResult<()>;
```

Source: `engine\pill_engine_core\src\assets\store.rs:763`

Write `bytes` as `destination`, replacing a file that is already there.

The overwrite counterpart of [`write_new`](fn.write_new.md#rustdoc-item-2009). The bytes go to a temporary
sibling first and are renamed over the destination only when they are
complete, so a crash never leaves a half-written asset and a reader never
sees one.

## Errors

[`AssetLoadError::Write`](../storage/enum.AssetLoadError.md#rustdoc-item-1437) with the underlying error when the file cannot be
written or moved into place.
