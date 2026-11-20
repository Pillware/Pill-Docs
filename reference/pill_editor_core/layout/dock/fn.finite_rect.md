<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7227"></a>

# Function `pill_editor_core::layout::dock::finite_rect`

```rust
pub(in layout::dock) fn finite_rect(rect: egui::Rect) -> egui::Rect;
```

Visibility: `{'restricted': {'parent': 7163, 'path': '::layout::dock'}}` · Source: `editor\pill_editor_core\src\layout\dock.rs:512`

Returns `rect`, or a zero rect when it still holds the placeholder
infinities.
