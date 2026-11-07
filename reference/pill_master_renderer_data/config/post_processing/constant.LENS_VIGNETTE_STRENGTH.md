<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1515"></a>

# Constant `pill_master_renderer_data::config::post_processing::LENS_VIGNETTE_STRENGTH`

```rust
pub(in config::post_processing) const LENS_VIGNETTE_STRENGTH: f32 = 0.5;
```

Visibility: `{'restricted': {'parent': 1483, 'path': '::config::post_processing'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\post_processing\mod.rs:155`

How far the vignette pulls the corners down.

The shader multiplies the radius by this value before the `smoothstep`. At
1.0 the whole falloff fits inside the frame and the corners go black. At 0.5
the falloff stops short of the corners: they lose about 40 percent of their
light, and the edges almost none.
