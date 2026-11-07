<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-734"></a>

# Function `pill_player::static_project::apply_project_startup_scene`

```rust
pub(in static_project) fn apply_project_startup_scene(engine: &mut pill_engine::Engine, scene_path: &str);
```

Visibility: `{'restricted': {'parent': 733, 'path': '::static_project'}}` · Source: `hosting\pill_player\src\static_project.rs:380`

Queue and load a project's startup scene, warning when it cannot be read.

A failure is a warning rather than an error, because a missing or unreadable
scene must not stop a project from starting.
