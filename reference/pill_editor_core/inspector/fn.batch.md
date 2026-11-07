<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4993"></a>

# Function `pill_editor_core::inspector::batch`

```rust
pub(in inspector) fn batch<impl Fn(Entity) -> (EditorCommand, String): Fn(pill_engine::Entity) -> (crate::editor_state::EditorCommand, String)>(targets: &[pill_engine::Entity], primary: pill_engine::Entity, component: &str, coalesce_field: &str, build_target_edit: impl Fn(pill_engine::Entity) -> (crate::editor_state::EditorCommand, String)) -> (Vec<crate::editor_state::EditorCommand>, String, String);
```

Visibility: `{'restricted': {'parent': 4798, 'path': '::inspector'}}` · Source: `editor\pill_editor_core\src\inspector.rs:1280`

A selection's batch of one-entity edits.

`build_target_edit` runs once per target, and the run for the primary also
names the step. Every selection builder has this shape: one command per
target, with the primary's label and coalesce key. A new reference kind is
therefore a new `build_target_edit`, not another copy of the loop.
