<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2459"></a>

# Function `pill_editor_core::editor_state::apply::engine::remember_active_space`

```rust
pub(in editor_state::apply::engine) fn remember_active_space(world: &mut pill_engine::World, space: crate::gizmo::GizmoSpace, frame: Option<u8>);
```

Visibility: `{'restricted': {'parent': 2458, 'path': '::editor_state::apply::engine'}}` · Source: `editor\pill_editor_core\src\editor_state\apply\engine.rs:329`

Records the gizmo's space as the active tool's own choice.

The space row, the menu rows and the chord all land here, so whichever
tool was active when a space was chosen is the one that remembers it.
