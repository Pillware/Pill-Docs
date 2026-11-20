<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11186"></a>

# Constant `pill_editor_core::tools::ELEMENT_PICK_SLACK_PIXELS`

```rust
pub const ELEMENT_PICK_SLACK_PIXELS: f32 = 1.0;
```

Source: `editor\pill_editor_core\src\tools.rs:554`

How far past half an element's pixel size a press still picks it.

The renderer grows the pick quad of a drawn point by the same slack, so the
editor's own hit test and the pick buffer agree about which pixels belong to
a handle.
