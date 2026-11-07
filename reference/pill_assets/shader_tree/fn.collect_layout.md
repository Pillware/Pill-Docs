<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-159"></a>

# Function `pill_assets::shader_tree::collect_layout`

```rust
pub(in shader_tree) fn collect_layout(directory: &std::path::Path, layout: &mut ShaderTreeLayout) -> Result<(), crate::CookError>;
```

Visibility: `{'restricted': {'parent': 87, 'path': '::shader_tree'}}` · Source: `assets\pill_assets\src\shader_tree.rs:142`

Walks `directory` and every directory below it, recording the source
directories and header directories it finds in `layout`.
