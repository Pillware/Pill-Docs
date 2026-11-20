<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-599"></a>

# Function `pill_editor_shell::shell::tab_inspector::inspector_targets`

```rust
pub fn inspector_targets(snapshot: &EditorSnapshot, primary: Entity, component: &str) -> Vec<Entity>;
```

Source: `editor\pill_editor_shell\src\shell\tab_inspector.rs:406`

Returns the entities one component's edit reaches: the primary first, then
every other selected entity that carries the component.
