<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-172"></a>

# Function `pill_project_ui::input::map_key`

```rust
pub fn map_key(key: pill_engine_core::input::KeyCode) -> Option<egui::Key>;
```

Source: `ui\pill_project_ui\src\input.rs:309`

Map an engine key code onto egui's.

The mapping covers the letters, digits, punctuation, function keys, arrows
and the editing keys a game UI uses; anything else is dropped rather than
guessed at.
