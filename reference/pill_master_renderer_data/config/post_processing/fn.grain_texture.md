<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1523"></a>

# Function `pill_master_renderer_data::config::post_processing::grain_texture`

```rust
pub(in config::post_processing) fn grain_texture() -> crate::assets::Texture;
```

Visibility: `{'restricted': {'parent': 1483, 'path': '::config::post_processing'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\post_processing\mod.rs:351`

A [`GRAIN_TILE_SIZE`](constant.GRAIN_TILE_SIZE.md#rustdoc-item-1521) square grain tile, generated rather than shipped.

Each texel gets a level from an integer hash. Neighbouring texels only have
to differ, not be truly random, so this builds the tile at install time and
the crate needs no binary for it.
