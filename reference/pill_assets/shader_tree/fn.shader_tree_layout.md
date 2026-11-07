<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-158"></a>

# Function `pill_assets::shader_tree::shader_tree_layout`

```rust
pub fn shader_tree_layout(root: &std::path::Path) -> Result<ShaderTreeLayout, crate::CookError>;
```

Source: `assets\pill_assets\src\shader_tree.rs:95`

Finds the directories under `root` that hold stage sources and the ones
that hold headers.

A missing `root` simply has no such directories, and that is not an error,
so a crate without shaders can still run its build script.

## Errors

Returns [`CookError::Io`](../enum.CookError.md#rustdoc-item-157) when a directory cannot be read.
