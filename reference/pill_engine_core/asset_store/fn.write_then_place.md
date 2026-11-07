<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2458"></a>

# Function `pill_engine_core::asset_store::write_then_place`

```rust
pub(in asset_store) fn write_then_place<impl FnOnce(&Path) -> std::io::Result<()>: FnOnce(&std::path::Path) -> std::io::Result<()>>(destination: &std::path::Path, bytes: &[u8], place: impl FnOnce(&std::path::Path) -> std::io::Result<()>) -> crate::asset::AssetLoadResult<()>;
```

Visibility: `{'restricted': {'parent': 2228, 'path': '::asset_store'}}` · Source: `engine\pill_engine_core\src\asset_store.rs:781`

Write `bytes` to a temporary sibling of `destination`, let `place` move it
into place, and clean the sibling up whatever happened.

The three writers differ only in how they treat a destination that already
exists. The temporary-file half (choosing the sibling name, writing it
whole, removing it) lives here once, so no writer leaves a half-written
file behind.

## Errors

[`AssetLoadError::Write`](../asset/enum.AssetLoadError.md#rustdoc-item-788) when the temporary file cannot be written, or
with the error `place` reports when it cannot move the file into place.
