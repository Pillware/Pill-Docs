<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-122"></a>

# Function `pill_spline_editor::spline_menu_run`

```rust
pub(crate) fn spline_menu_run(entity: pill_engine::Entity, kind: &str, selected: &[u64], item: &str, world: &pill_engine::World) -> Result<Vec<pill_editor_core::editor_state::EditorCommand>, String>;
```

Visibility: `crate` · Source: `extensions\pill_spline\modules\editor\src\pill_spline_editor.rs:395`

Runs one of the tool's menu rows.

Both rows answer element commands, so the editor records them as one undo
step like any other edit.
