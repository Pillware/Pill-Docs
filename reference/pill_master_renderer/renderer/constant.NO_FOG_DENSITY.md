<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1851"></a>

# Constant `pill_master_renderer::renderer::NO_FOG_DENSITY`

```rust
pub(in renderer) const NO_FOG_DENSITY: f32 = 0.0;
```

Visibility: `{'restricted': {'parent': 1847, 'path': '::renderer'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\renderer.rs:113`

Fog values the engine parameters keep so their layout matches what a shader
expects.

The parameter block declares a fog colour and density first, because a
project's shader may read them, but no frontend sets fog yet. The frame
therefore writes zero density and black, rather than leaving whatever the
previous frame wrote.
