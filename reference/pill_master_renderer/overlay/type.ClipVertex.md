<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1320"></a>

# Type alias `pill_master_renderer::overlay::ClipVertex`

```rust
pub(in overlay) type ClipVertex = ([f32; 4], [f32; 3]);
```

Visibility: `{'restricted': {'parent': 854, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\overlay\mod.rs:182`

A vertex on its way to the screen: its clip-space position and the corner
of the shape it belongs to, carried through clipping.
