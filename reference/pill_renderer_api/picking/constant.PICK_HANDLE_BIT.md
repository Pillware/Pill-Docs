<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1214"></a>

# Constant `pill_renderer_api::picking::PICK_HANDLE_BIT`

```rust
pub const PICK_HANDLE_BIT: u32 = 0x8000_0000;
```

Source: `rendering\pill_renderer_api\src\picking.rs:34`

What one pixel of the pick buffer holds: `0` for nothing, `1 + index` for
the instance at `index` of the frame's instance list, and a gizmo handle
with the top bit set.
