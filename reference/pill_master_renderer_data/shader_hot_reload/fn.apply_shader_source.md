<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1677"></a>

# Function `pill_master_renderer_data::shader_hot_reload::apply_shader_source`

```rust
pub fn apply_shader_source<'a, impl IntoIterator<Item = &'a ShaderSourceRecord>: IntoIterator<Item = _>>(assets: &mut pill_engine::AssetManager, relative_path: &str, wgsl: &str, shader_source_records: impl IntoIterator<Item = _>) -> Vec<&'static str>;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\shader_hot_reload.rs:65`

Replaces one stage's WGSL in every recorded shader asset built from
`relative_path` and returns the names of the assets whose text changed.

`relative_path` is relative to the crate's `shader_sources/` and uses `/`
separators, which is how the records spell it. A record whose asset is not
in the store is skipped, which happens for a pipeline this project never
installed (the opt-in simple pipeline, for example).
