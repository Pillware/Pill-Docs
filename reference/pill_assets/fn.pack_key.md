<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-295"></a>

# Function `pill_assets::pack_key`

```rust
pub(crate) fn pack_key(root: &std::path::Path, file: &std::path::Path) -> Result<Option<String>, CookError>;
```

Visibility: `crate` · Source: `assets\pill_assets\src\lib.rs:542`

The `/`-separated key that `file` packs under below `root`, or `None` when
any part of the path starts with a dot.

A dot-named path is never an asset. `write_beside` writes a metadata update
as `.<file>.meta.<pid>-<seq>.tmp`, and a crash can leave one behind. The
engine's own walk of `res` skips dot-files, and the temporary file holds
the asset's own header, so indexing it would take that asset's guid.

## Errors

Returns [`CookError::Rule`](enum.CookError.md#rustdoc-item-78) when the path is not UTF-8.
