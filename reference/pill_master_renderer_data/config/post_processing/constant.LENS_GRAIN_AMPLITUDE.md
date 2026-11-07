<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1519"></a>

# Constant `pill_master_renderer_data::config::post_processing::LENS_GRAIN_AMPLITUDE`

```rust
pub(in config::post_processing) const LENS_GRAIN_AMPLITUDE: f32 = 0.0;
```

Visibility: `{'restricted': {'parent': 1483, 'path': '::config::post_processing'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\post_processing\mod.rs:170`

Grain amplitude.

At zero, the shader's `min(colour + black_limit, grain_amount)` gives no
offset, so the tile is sampled and ignored. Grain is off because the pattern
is dense at 1:1 pixels and reads as noise on a still image. The rest of the
pass stays in place, so turning grain back on means changing this number
alone.
