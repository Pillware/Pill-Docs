<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2454"></a>

# Function `pill_engine_core::asset_store::write_beside`

```rust
pub fn write_beside(source: &std::path::Path, target: &std::path::Path, bytes: &[u8]) -> crate::asset::AssetLoadResult<Option<std::path::PathBuf>>;
```

Source: `engine\pill_engine_core\src\asset_store.rs:688`

Write `bytes` to a file named like `target`, in the directory of the asset
`source`, unless that file already exists.

Returns the written file, or the one that was already there. Returns
`None` when `source` is not on the filesystem: a packed asset (every asset
of a shipping or web build) has no directory to write into, and that is
not an error.

The bytes go to a temporary sibling first and are linked into place only
when they are complete, so a crash or a second writer never leaves a
half-written file. An existing file is never replaced, even one that
appears while this runs, because it may hold a person's edits.

## Errors

Returns [`AssetLoadError::Write`](../asset/enum.AssetLoadError.md#rustdoc-item-788) when the file cannot be written.
