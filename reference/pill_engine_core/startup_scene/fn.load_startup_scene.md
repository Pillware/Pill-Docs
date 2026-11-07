<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8505"></a>

# Function `pill_engine_core::startup_scene::load_startup_scene`

```rust
pub(in startup_scene) fn load_startup_scene(engine: &mut crate::engine::Engine, path: &str) -> Result<crate::scene::SceneLoad, String>;
```

Visibility: `{'restricted': {'parent': 8506, 'path': '::startup_scene'}}` · Source: `engine\pill_engine_core\src\startup_scene.rs:110`

Load the scene at `path` into `engine`, through the one scene loader every
entry point shares.

When the host built an asset database - a shipped pack's index, or an index
of the project's files - the scene's references resolve through it. That is
what lets a reference carrying only a guid find its file in a pack build,
where no directory is mounted. Without one, an index is built from the
mounted asset directory, or left empty when nothing is mounted.

## Errors

Returns the reason when no asset types are registered, when `path` is not a
scene file, or when the file cannot be loaded or kept loaded.
