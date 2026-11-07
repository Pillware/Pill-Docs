<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1676"></a>

# Constant `pill_master_renderer_data::shader_hot_reload::SHADER_CHANGE_REFUSED`

```rust
pub const SHADER_CHANGE_REFUSED: u32 = u32::MAX;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\shader_hot_reload.rs:52`

What [`pill_render_data_shader_changed`](fn.pill_render_data_shader_changed.md#rustdoc-item-1675) returns when it cannot reach the
shader assets at all.

That is a null world, a world without an `AssetManager`, a null buffer with
a non-zero length, or a path or text that is not UTF-8.
