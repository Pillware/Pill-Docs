<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-137"></a>

# Function `pill_assets::shader_tree::cook_shader_tree`

```rust
pub fn cook_shader_tree(root: &std::path::Path) -> Result<ShaderTreeReport, crate::CookError>;
```

Source: `assets\pill_assets\src\shader_tree.rs:116`

Cooks every stale stage source under `root`, a crate's `shaders/`
directory.

A source is stale when its `.wgsl` output is missing, or older than the
source, or older than any header. So a header edit re-cooks every source
that could include it, and a tree nobody edited cooks nothing.

## Errors

Returns the first [`CookError`](../enum.CookError.md#rustdoc-item-64): a source `slangc` rejects, a missing
`slangc`, or an I/O failure. Outputs cooked before the failure stay in
place, so a caller that keeps the previous shaders on failure still finds
them on disk.
