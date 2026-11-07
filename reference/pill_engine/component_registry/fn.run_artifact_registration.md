<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-348"></a>

# Function `pill_engine::component_registry::run_artifact_registration`

```rust
pub fn run_artifact_registration(engine: &mut crate::Engine, register: fn (_: &mut crate::Engine) -> u32) -> u32;
```

Source: `engine\pill_engine\src\component_registry.rs:532`

Runs one artifact's registration, and nothing else.

This is the half a later generation repeats: [the value types and the
components](fn.run_artifact_entry.md#rustdoc-item-311) come back with the new image, the declared
systems, resources and asset types are declared again, and the artifact's
`register` runs last. The one-time work - `before_init`, the user's `init` -
is deliberately absent, so a reload cannot seed a world twice.

Returns zero on success, exactly like the entry points it serves.
