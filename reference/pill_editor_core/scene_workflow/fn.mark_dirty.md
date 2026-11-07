<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6689"></a>

# Function `pill_editor_core::scene_workflow::mark_dirty`

```rust
pub fn mark_dirty(world: &mut pill_engine::World);
```

Source: `editor\pill_editor_core\src\scene_workflow.rs:104`

Mark the document as changed since it was last saved or opened.

Called after each undoable command that applied, including selection and
asset-file commands. The scene commands clear the marker themselves when
they start, open or save a scene.
