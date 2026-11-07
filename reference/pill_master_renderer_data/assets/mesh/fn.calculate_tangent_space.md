<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-422"></a>

# Function `pill_master_renderer_data::assets::mesh::calculate_tangent_space`

```rust
pub(in assets::mesh) fn calculate_tangent_space(vertices: &mut [MeshVertex], indices: &[u32]);
```

Visibility: `{'restricted': {'parent': 324, 'path': '::assets::mesh'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\mesh.rs:326`

Builds every vertex's tangent and bitangent from the mesh's triangles and
their UV coordinates, then normalizes the two.
