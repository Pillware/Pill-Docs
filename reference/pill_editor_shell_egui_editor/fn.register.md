<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1095"></a>

# Function `pill_editor_shell_egui_editor::register`

```rust
pub fn register(engine: &mut pill_engine::Engine) -> u32;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\pill_editor_shell_egui_editor.rs:73`

Registers the shell against the host engine. Returns zero on success.

This is the half a reload repeats: it re-claims every resource it owns. A
reload releases the resources that the arriving generation does not register
again, and registering an existing one keeps its value instead of resetting
it.
