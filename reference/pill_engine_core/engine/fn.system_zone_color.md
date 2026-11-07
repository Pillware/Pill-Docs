<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4363"></a>

# Function `pill_engine_core::engine::system_zone_color`

```rust
pub(in engine) fn system_zone_color(system_owner: SystemOwner) -> u32;
```

Visibility: `{'restricted': {'parent': 4158, 'path': '::engine'}}` · Source: `engine\pill_engine_core\src\engine.rs:1718`

The Tracy zone color of a system with this owner.

A project's systems are drawn in blue so they stand out from the engine's
and the extensions' work, which keep the viewer's default color.
