<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-818"></a>

# Function `pill_master_renderer::preview::mesh_framing_transform`

```rust
pub(in preview) fn mesh_framing_transform(vertices: &[crate::assets::MeshVertex]) -> Option<[[f32; 4]; 4]>;
```

Visibility: `{'restricted': {'parent': 592, 'path': '::preview'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\preview.rs:786`

Builds the transform a mesh preview draws through.

The mesh's own bounds decide where the camera sits, so any asset fills the
square.

The camera looks at the bounds' centre and moves back until their
bounding sphere fits the field of view, from a three-quarter angle, so the
preview shows a solid shape instead of a flat outline.

Returns `None` when the vertices have no usable bounds: there are none, all
of them sit at one point, or their coordinates are not finite.
