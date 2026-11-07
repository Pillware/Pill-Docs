<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8481"></a>

# Function `pill_editor_core::toolbox::clamped_origin`

```rust
pub fn clamped_origin(requested_origin: egui::Pos2, viewport: egui::Rect) -> egui::Pos2;
```

Source: `editor\pill_editor_core\src\toolbox.rs:131`

Returns the origin a drag may use: `requested_origin` moved back inside
`viewport`, one margin clear of its edges.

A viewport smaller than the panel cannot hold it. The clamp then pins the
panel's top-left corner at its starting position, so the right or bottom
part may stick out; the handle and the first rows stay reachable.
