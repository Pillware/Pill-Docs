<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1511"></a>

# Function `pill_master_renderer::overlay::unit_direction`

```rust
pub(in overlay) fn unit_direction(direction: [f32; 2]) -> Option<[f32; 2]>;
```

Visibility: `{'restricted': {'parent': 854, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\overlay\mod.rs:1372`

Scales `direction` to unit length, or returns `None` when it is too short
to have one.
