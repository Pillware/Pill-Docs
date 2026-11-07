<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-293"></a>

# Function `pill_assets::write_asset_pack_with_roots`

```rust
pub fn write_asset_pack_with_roots(source: &std::path::Path, module_roots: &[std::path::PathBuf], pack_path: &std::path::Path) -> Result<Vec<std::path::PathBuf>, CookError>;
```

Source: `assets\pill_assets\src\lib.rs:453`

Write every file below `source` and below each of `module_roots` into one
asset pack at `pack_path`, and return the packed files for a build script
to report to cargo.

The format belongs to `pill_engine::asset_store`, and the two change
together. A pack starts with `PILLPACK`, a `u32` version and a `u32` entry
count. Then comes one entry per file: a `u32` path length, the
`/`-separated path below its root, a `u64` offset and a `u64` length
measured from the start of the pack. Every number is little-endian. The
file bytes follow the index, sorted by path. A missing `source` or root
contributes no files.

A module's resources are named relative to its own root, so they pack
under that same name. A shipped build then reads them where a development
build finds them beside the module, and no directory has to be declared.
Names resolve the way `pill_engine::asset_store::read` resolves them: the
project's files first, then each root in order. The index is flat, so a
duplicate would replace the earlier entry silently. `res/editor/` is the
editor's own content and stays out of the project's part. A module root is
read-only content and keeps everything it ships.

## Errors

Returns [`CookError::Io`](enum.CookError.md#rustdoc-item-157) when a file cannot be read or the pack cannot be
written, and [`CookError::Rule`](enum.CookError.md#rustdoc-item-78) for a path that is not UTF-8.
