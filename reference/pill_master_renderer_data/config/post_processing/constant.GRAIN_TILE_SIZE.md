<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1521"></a>

# Constant `pill_master_renderer_data::config::post_processing::GRAIN_TILE_SIZE`

```rust
pub(in config::post_processing) const GRAIN_TILE_SIZE: u32 = 256;
```

Visibility: `{'restricted': {'parent': 1483, 'path': '::config::post_processing'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\post_processing\mod.rs:179`

Edge of the grain tile, in texels.

The square tile is generated at this size, so one number sets both sides.
The lens pass also receives the size as a parameter, so the shader can map
screen pixels into the tile without repeating a literal of its own.
