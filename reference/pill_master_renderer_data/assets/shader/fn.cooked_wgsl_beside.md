<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1108"></a>

# Function `pill_master_renderer_data::assets::shader::cooked_wgsl_beside`

```rust
pub(in assets::shader) fn cooked_wgsl_beside(source_path: &str) -> pill_engine::AssetLoadResult<std::path::PathBuf>;
```

Visibility: `{'restricted': {'parent': 1008, 'path': '::assets::shader'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\shader.rs:500`

The WGSL file this crate's build script cooked beside a shader source.

## Errors

Returns [`AssetLoadError::Decode`] when the source names no file, so there
is nothing to cook beside.
