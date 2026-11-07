<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-206"></a>

# Constant `pill_ui_kit::widgets::SHADOW_OFFSET`

```rust
pub const SHADOW_OFFSET: f32 = 3.0;
```

Source: `ui\pill_ui_kit\src\widgets.rs:44`

The distance between the face and its shadow, in points.

The face is the allocated rectangle shrunk by this much. The shadow is the
face rectangle moved by the same amount, which puts it flush with the
rectangle's right and bottom edges. While the button is held, the face
moves onto the shadow instead.
