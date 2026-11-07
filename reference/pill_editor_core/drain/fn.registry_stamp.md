<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2331"></a>

# Function `pill_editor_core::drain::registry_stamp`

```rust
pub fn registry_stamp(world: &pill_engine::World) -> u64;
```

Source: `editor\pill_editor_core\src\drain.rs:397`

A stamp of the world's component registry: the component names plus every
field name their layouts declare. Removing a field changes it too.
