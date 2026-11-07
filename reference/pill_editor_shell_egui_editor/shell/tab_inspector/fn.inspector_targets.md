<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-577"></a>

# Function `pill_editor_shell_egui_editor::shell::tab_inspector::inspector_targets`

```rust
pub fn inspector_targets(snapshot: &EditorSnapshot, primary: Entity, component: &str) -> Vec<Entity>;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_inspector.rs:390`

Returns the entities one component's edit reaches: the primary first, then
every other selected entity that carries the component.
