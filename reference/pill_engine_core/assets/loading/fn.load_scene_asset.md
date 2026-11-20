<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-980"></a>

# Function `pill_engine_core::assets::loading::load_scene_asset`

```rust
pub fn load_scene_asset(engine: &mut crate::engine::Engine, path: &str) -> Result<crate::scene::SceneLoad, String>;
```

Source: `engine\pill_engine_core\src\assets\loading.rs:175`

Loads the `.scene` at `path` into the engine's world.

The document comes from [`import_scene_document`](fn.import_scene_document.md#rustdoc-item-977) and the references
resolve through [`scene_database`](fn.scene_database.md#rustdoc-item-979). [`Engine::load_scene_file`](../../engine/struct.Engine.md#rustdoc-item-976) and the
startup scene load through here, so both resolve a reference by guid under
the same rules. The editor's Open calls those two helpers as well, but
replaces the world itself because it keeps the scene's guid.

## Errors

As [`import_scene_document`](fn.import_scene_document.md#rustdoc-item-977).
