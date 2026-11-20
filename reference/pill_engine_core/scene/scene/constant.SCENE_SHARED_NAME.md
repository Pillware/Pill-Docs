<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7909"></a>

# Constant `pill_engine_core::scene::scene::SCENE_SHARED_NAME`

```rust
pub(in scene::scene) const SCENE_SHARED_NAME: &str = "pill_engine::Scene";
```

Visibility: `{'restricted': {'parent': 7827, 'path': '::scene::scene'}}` · Source: `engine\pill_engine_core\src\scene\scene.rs:132`

The shared name of [`Scene`](struct.Scene.md#rustdoc-item-1366), written as a literal: the key the import
registry files the type under, and the name a `Handle<Scene>` field records
as its asset type. It follows the `<crate>::<Type>` rule under the public
crate name, and a file written with the older `pill_engine::scene::Scene`
still reads as this type.
