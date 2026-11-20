<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8097"></a>

# Function `pill_engine_core::scene::startup_scene::queue_startup_scene`

```rust
pub fn queue_startup_scene<impl Into<String>: Into<String>>(world: &mut crate::world::World, path: impl Into<String>);
```

Source: `engine\pill_engine_core\src\scene\startup_scene.rs:67`

Ask for `path` to be loaded while the project starts, once its component
types are registered.

A second call replaces the first request, because both are stored under the
same resource type.
