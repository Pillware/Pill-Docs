<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6691"></a>

# Function `pill_editor_core::scene_workflow::open_scene`

```rust
pub fn open_scene(engine: &mut pill_engine::Engine, path: &str) -> Result<pill_engine::SceneLoad, String>;
```

Source: `editor\pill_editor_core\src\scene_workflow.rs:136`

Open the scene at `path`, replacing the world's entities.

The path is below the asset directory; the file's own guid is kept, so
saving writes it back unchanged. The world is left as it was when the file
cannot be imported or carries no guid.

## Errors

Returns an error when the file cannot be imported: it is not a scene file,
no asset types are registered, or it fails to load. It also fails when the
file carries no guid.
