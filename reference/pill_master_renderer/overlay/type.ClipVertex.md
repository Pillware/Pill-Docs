<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1279"></a>

# Type alias `pill_master_renderer::overlay::ClipVertex`

```rust
pub(in overlay) type ClipVertex = ([f32; 4], [f32; 3]);
```

Visibility: `{'restricted': {'parent': 858, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\mod.rs:166`

A vertex on its way to the screen: its clip-space position and the corner
of the shape it belongs to, carried through clipping.
