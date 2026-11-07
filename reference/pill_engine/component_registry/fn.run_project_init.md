<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-350"></a>

# Function `pill_engine::component_registry::run_project_init`

```rust
pub fn run_project_init(engine: &mut crate::Engine, register: fn (_: &mut crate::Engine) -> u32, init: fn (_: &mut crate::Engine) -> u32) -> u32;
```

Source: `engine\pill_engine\src\component_registry.rs:566`

[`run_artifact_entry`](fn.run_artifact_entry.md#rustdoc-item-311) for a project, which also loads the startup scene the
front end queued.

The load runs after registration and before the user's `init`: a scene
loaded earlier would find no component types to attach, and one loaded later
would double every entity the project seeds.
