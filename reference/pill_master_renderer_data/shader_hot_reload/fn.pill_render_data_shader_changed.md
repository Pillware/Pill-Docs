<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1675"></a>

# Function `pill_master_renderer_data::shader_hot_reload::pill_render_data_shader_changed`

```rust
pub unsafe extern "C" fn pill_render_data_shader_changed(world: *mut pill_engine::World, path: *const u8, path_len: usize, wgsl: *const u8, wgsl_len: usize) -> u32;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\shader_hot_reload.rs:116`

Writes one re-cooked WGSL file into the shader assets built from it, in
`world`'s `AssetManager`.

`path` is the cooked file's path relative to the crate's `shader_sources/`,
with `/` separators (for example
`pbr_pipeline/shaders/pbr_fragment.wgsl`), and `wgsl` is its text. The
return value is the number of shader assets that changed, or
[`SHADER_CHANGE_REFUSED`](constant.SHADER_CHANGE_REFUSED.md#rustdoc-item-1676).

## Safety

`world` must be null or point at a live `World` that nothing else uses for
the duration of the call. `path` and `wgsl` must each point at their
declared number of readable bytes, unless that length is zero.
