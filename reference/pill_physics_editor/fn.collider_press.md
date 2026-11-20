<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-145"></a>

# Function `pill_physics_editor::collider_press`

```rust
pub(crate) fn collider_press(_entity: pill_engine::Entity, _element: u64, _click: pill_editor_core::editor_state::SelectionClick, _selected: &[u64], _world: &pill_engine::World) -> pill_editor_core::tools::PressResponse;
```

Visibility: `crate` · Source: `extensions\pill_physics\modules\editor\src\pill_physics_editor.rs:331`

Answers a press on one of the tool's handles.

The editor's own rule is what a collider wants: a press selects the handle
and starts a drag.
