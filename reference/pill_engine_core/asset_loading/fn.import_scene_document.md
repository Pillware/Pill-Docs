<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1846"></a>

# Function `pill_engine_core::asset_loading::import_scene_document`

```rust
pub fn import_scene_document(engine: &mut crate::engine::Engine, path: &str) -> Result<(crate::scene::SceneDocument, Option<crate::asset::AssetGuid>), String>;
```

Source: `engine\pill_engine_core\src\asset_loading.rs:112`

Reads the `.scene` at `path` and returns its document and the guid the file
carries.

Every scene entry point starts here: [`Engine::load_scene_file`](../engine/struct.Engine.md#rustdoc-item-1845), the
startup scene and the editor's Open. Sharing one import step means they
agree on what a scene document is and which asset types it needs.

## Errors

Returns the reason when no asset types are registered, when the engine has
no asset manager, when `path` is not a scene file, or when the file cannot
be imported or does not stay loaded.
