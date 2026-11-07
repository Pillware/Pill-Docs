<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6690"></a>

# Function `pill_editor_core::scene_workflow::new_scene`

```rust
pub fn new_scene(engine: &mut pill_engine::Engine) -> usize;
```

Source: `editor\pill_editor_core\src\scene_workflow.rs:114`

Start an empty scene: every entity is removed, no file is open, and the
selection and history are cleared.

Returns how many entities were removed.
