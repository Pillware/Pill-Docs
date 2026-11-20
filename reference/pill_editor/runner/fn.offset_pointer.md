<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1827"></a>

# Function `pill_editor::runner::offset_pointer`

```rust
pub(in runner) fn offset_pointer(event: pill_engine_core::InputEvent, (delta_x, delta_y): (f32, f32)) -> pill_engine_core::InputEvent;
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:4168`

Shift a pointer event the scene window reported into the main window's
client coordinates. Only cursor positions move: buttons and wheels carry
no position of their own, and egui reads the cursor's for them.
