<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-127"></a>

# Function `pill_spline_editor::insert_point_command`

```rust
pub(crate) fn insert_point_command(entity: pill_engine::Entity, selected: &[u64], world: &pill_engine::World) -> Result<pill_editor_core::editor_state::EditorCommand, String>;
```

Visibility: `crate` · Source: `extensions\pill_spline\modules\editor\src\pill_spline_editor.rs:444`

The recorded insert a menu row and the key both mean: a point one insert
step past the last selected one, along the curve's end.
