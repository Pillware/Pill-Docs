<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2456"></a>

# Function `pill_engine_core::asset_store::write_new`

```rust
pub fn write_new(destination: &std::path::Path, bytes: &[u8]) -> crate::asset::AssetLoadResult<()>;
```

Source: `engine\pill_engine_core\src\asset_store.rs:726`

Write `bytes` as the new file `destination`, refusing when it exists.

The bytes go to a temporary sibling first and are linked into place only
when complete, so a crash never leaves a half-written file, and an existing
file - even one that appears while this runs - is never replaced. Missing
parent directories are not created: the caller names a folder that exists.

## Errors

[`AssetLoadError::Write`](../asset/enum.AssetLoadError.md#rustdoc-item-788) with [`std::io::ErrorKind::AlreadyExists`] when
the file exists, or with the underlying error when it cannot be written.
