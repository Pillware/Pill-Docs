<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1854"></a>

# Function `pill_engine_core::scene::load_scene`

```rust
pub fn load_scene(engine: &mut crate::engine::Engine, database: &crate::asset_database::AssetDatabase, document: &SceneDocument) -> SceneLoad;
```

Source: `engine\pill_engine_core\src\scene.rs:368`

Instantiates a scene document into a world.

The entities are created under the ids the document carries, so a reference
between them resolves. A component the world does not know is reported and
skipped. A field the layout does not have, or a value the field layer
refuses, is reported the same way.
