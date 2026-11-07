<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1468"></a>

# Function `pill_master_renderer::overlay::unit_direction`

```rust
pub(in overlay) fn unit_direction(direction: [f32; 2]) -> Option<[f32; 2]>;
```

Visibility: `{'restricted': {'parent': 858, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\mod.rs:1328`

Scales `direction` to unit length, or returns `None` when it is too short
to have one.
