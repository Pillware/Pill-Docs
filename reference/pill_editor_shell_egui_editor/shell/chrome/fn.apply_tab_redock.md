<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-442"></a>

# Function `pill_editor_shell_egui_editor::shell::chrome::apply_tab_redock`

```rust
pub fn apply_tab_redock(dock: &mut DockState<EditorTab>, surface: SurfaceIndex);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\chrome.rs:192`

Brings a floating surface's tabs back into the dock: the Redock item of a
tab menu, run after the pass that asked.

Public because [`settle_pass`](../settle/fn.settle_pass.md#rustdoc-item-441)'s generated hot patch calls it through the
package path.
