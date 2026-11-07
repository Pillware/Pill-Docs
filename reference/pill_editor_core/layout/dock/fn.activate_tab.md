<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5265"></a>

# Function `pill_editor_core::layout::dock::activate_tab`

```rust
pub fn activate_tab(dock: &mut egui_dock::DockState<EditorTab>, tab: EditorTab) -> bool;
```

Source: `editor\pill_editor_core\src\layout\dock.rs:526`

Brings `tab` to the front of its group and reports whether the dock held
it.

The Window menu and the scripted `tab` command share this path.
`set_active_tab` takes the tab's index inside its leaf; focusing the node
needs the tab's whole path, because a node index only addresses the
surface whose tree holds it - a floating surface's tree is separate.
