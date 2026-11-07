<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8504"></a>

# Function `pill_engine_core::startup_scene::apply_startup_scene`

```rust
pub fn apply_startup_scene(engine: &mut crate::engine::Engine) -> Option<Result<crate::scene::SceneLoad, String>>;
```

Source: `engine\pill_engine_core\src\startup_scene.rs:79`

Load the queued startup scene, if one was queued.

`None` when nothing was queued, or when the request could not be taken out
of the world (that failure is logged). Otherwise the `SceneLoad` says what
the load created and what it had to skip.

## Errors

The inner `Err` carries the reason the scene could not be read.
[`crate::asset_loading::import_scene_document`](../asset_loading/fn.import_scene_document.md#rustdoc-item-1846) returns it when no asset
types are registered, when `path` is not a scene file, or when the file
cannot be loaded or kept loaded. A scene that reads but loses parts still
returns `Ok`: unknown components and unresolved references are counted in
the [`SceneLoad`](../scene/struct.SceneLoad.md#rustdoc-item-1850) instead.
