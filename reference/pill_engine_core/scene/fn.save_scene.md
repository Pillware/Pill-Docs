<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7813"></a>

# Function `pill_engine_core::scene::save_scene`

```rust
pub fn save_scene(world: &crate::world::World, assets: &crate::asset::AssetManager, registry: &crate::asset_import_registry::ImportRegistry, entities: Option<&[crate::entity::Entity]>) -> (SceneDocument, SceneSave);
```

Source: `engine\pill_engine_core\src\scene.rs:165`

Writes a world's entities into a scene document.

`entities` names the entities to write, and `None` writes every live
entity. A component is written when the field layer can read it, which is
also what a load needs to write it back. Persistability is not required:
it is the serde registration that migrates a type's rows across a reload.
A component holding an `Entity` - the very thing a scene exists to carry -
cannot be serde-serialized at all.
