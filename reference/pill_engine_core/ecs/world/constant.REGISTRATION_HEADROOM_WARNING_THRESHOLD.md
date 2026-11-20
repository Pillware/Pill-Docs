<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5003"></a>

# Constant `pill_engine_core::ecs::world::REGISTRATION_HEADROOM_WARNING_THRESHOLD`

```rust
pub(in ecs::world) const REGISTRATION_HEADROOM_WARNING_THRESHOLD: usize = 16;
```

Visibility: `{'restricted': {'parent': 4727, 'path': '::ecs::world'}}` · Source: `engine\pill_engine_core\src\ecs\world\mod.rs:88`

Free component types left below the 128-type ceiling at which registration
starts to warn.

The ceiling is shared by a project and all of its extensions, so a project
with few types of its own can still reach it. The warning fires while there
is still room to react, so the limit shows up before registration starts to
fail.
