<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-423"></a>

# Function `pill_master_renderer_data::assets::mesh::normalize_or_fallback`

```rust
pub(in assets::mesh) fn normalize_or_fallback(vector: glam::Vec3, fallback_axis: glam::Vec3) -> glam::Vec3;
```

Visibility: `{'restricted': {'parent': 324, 'path': '::assets::mesh'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\mesh.rs:369`

Returns the vector scaled to length 1, or `fallback_axis` when the vector
is not finite or too short to normalize.
