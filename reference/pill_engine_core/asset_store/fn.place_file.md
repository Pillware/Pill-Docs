<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2451"></a>

# Function `pill_engine_core::asset_store::place_file`

```rust
pub(in asset_store) fn place_file(temporary: &std::path::Path, destination: &std::path::Path, existing: Existing, link: fn (_: &std::path::Path, _: &std::path::Path) -> std::io::Result<()>) -> std::io::Result<()>;
```

Visibility: `{'restricted': {'parent': 2228, 'path': '::asset_store'}}` · Source: `engine\pill_engine_core\src\asset_store.rs:838`

Move the complete file `temporary` to `destination`, treating a
destination that already exists as `existing` says.

The hard link is tried first, because it fails when the destination exists
and no rename does. A filesystem without hard links (exFAT, FAT, some
network shares) falls back to a rename. There the existence check below
stands in for the link's refusal. The check and the rename are not one
operation, but only two writers racing on one file could slip between them.

## Errors

[`std::io::ErrorKind::AlreadyExists`] when the destination exists and
`existing` is [`Existing::Refuse`](enum.Existing.md#rustdoc-item-2417), or the error the link or the rename
reports.
