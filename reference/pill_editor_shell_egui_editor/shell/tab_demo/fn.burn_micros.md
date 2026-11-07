<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-249"></a>

# Function `pill_editor_shell_egui_editor::shell::tab_demo::burn_micros`

```rust
pub fn burn_micros(micros: f32);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_demo.rs:113`

Spins on the wall clock for `micros` microseconds without doing any work,
which is how the slow body spends more than its frame budget.

Public because the function inventory names it by path.
