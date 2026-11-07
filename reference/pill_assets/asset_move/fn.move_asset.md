<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-172"></a>

# Function `pill_assets::asset_move::move_asset`

```rust
pub fn move_asset(source_path: &std::path::Path, target_path: &std::path::Path) -> Result<(), MoveAssetError>;
```

Source: `assets\pill_assets\src\asset_move.rs:132`

Moves the source asset at `source_path` to `target_path`, together with its
`.meta` file when it has one.

Both arguments are filesystem paths. The destination's directory is created
when it is missing, and nothing is overwritten.

## Errors

- [`MoveAssetError::SourceMissing`](enum.MoveAssetError.md#rustdoc-item-163) when `source_path` is not a file.
- [`MoveAssetError::IsMetadataFile`](enum.MoveAssetError.md#rustdoc-item-165) when `source_path` is a `.meta` file
  itself.
- [`MoveAssetError::TargetExists`](enum.MoveAssetError.md#rustdoc-item-167) when `target_path`, or the path its
  metadata file would take, already exists.
- [`MoveAssetError::Io`](enum.MoveAssetError.md#rustdoc-item-171) when creating the destination's directory or a
  rename fails; a failed metadata rename attempts to move the source back
  before it returns.
