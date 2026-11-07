<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-168"></a>

# Function `pill_project_ui::input::pointer_button`

```rust
pub fn pointer_button(button: pill_engine_core::input::MouseButton) -> Option<egui::PointerButton>;
```

Source: `ui\pill_project_ui\src\input.rs:284`

Map an engine mouse button to egui's pointer button.

The two side buttons map to nothing and return `None`.
