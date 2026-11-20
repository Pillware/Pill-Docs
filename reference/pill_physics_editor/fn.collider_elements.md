<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-132"></a>

# Function `pill_physics_editor::collider_elements`

```rust
pub(crate) fn collider_elements(entity: pill_engine::Entity, world: &pill_engine::World, out: &mut Vec<pill_editor_core::tools::ToolElement>);
```

Visibility: `crate` · Source: `extensions\pill_physics\modules\editor\src\pill_physics_editor.rs:198`

The handles the entity's collider offers, at the places the shape puts them.

Each handle sits on the surface it edits: a face handle at the face's centre,
a radius handle one radius out along `+X`, a height handle one half height up
along `+Y`. The shape's own offset and the entity's rotation place all of
them, so a turned collider's handles turn with it.
