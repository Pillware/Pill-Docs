<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4616"></a>

# Function `pill_editor_core::input::modifiers`

```rust
pub fn modifiers(engine_modifiers: pill_engine::input::Modifiers) -> egui::Modifiers;
```

Source: `editor\pill_editor_core\src\input.rs:234`

Copies the engine's modifier state into egui's.

Ctrl becomes both `ctrl` and `command`, because egui's `command` means the
platform's shortcut key. The engine's Super key is dropped, since egui's
`Modifiers` has no field for it.
