<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1097"></a>

# Function `pill_editor_shell_egui_editor::init`

```rust
pub fn init(engine: &mut pill_engine::Engine) -> u32;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\pill_editor_shell_egui_editor.rs:165`

The artifact's one-time entry point: nothing is one-time here.

Every resource and system the shell owns is re-claimed by [`register`](fn.register.md#rustdoc-item-1095) on
each generation, which is exactly what a reload has to repeat. This function
exists because a statically linked build loads the module once and calls
this entry point alone, and because the generated
`host_module_pill_editor_shell_egui_editor` wrapper carries it as
`pill_module_init`.
