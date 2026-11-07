<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4613"></a>

# Function `pill_editor_core::input::pointer_button`

```rust
pub fn pointer_button(button: pill_engine::input::MouseButton) -> Option<egui::PointerButton>;
```

Source: `editor\pill_editor_core\src\input.rs:220`

Returns the egui pointer button for an engine mouse button.

The side buttons (`Back` and `Forward`) have no mapping, so they return
`None` and their presses never reach egui.
