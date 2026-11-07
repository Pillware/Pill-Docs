<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6702"></a>

# Function `pill_editor_core::scene_workflow::default_save_path`

```rust
pub fn default_save_path(scene_session: &SceneSession) -> String;
```

Source: `editor\pill_editor_core\src\scene_workflow.rs:364`

The path a Save As defaults to: the open scene's path, or
`scenes/untitled.scene` when no scene file is open.
