<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1374"></a>

# Constant `pill_core::profiling::PROJECT_SYSTEM_ZONE_COLOR`

```rust
pub const PROJECT_SYSTEM_ZONE_COLOR: u32 = 0x2F6FDF;
```

Source: `engine\pill_core\src\profiling.rs:74`

The zone color of an ECS system the project registered, `0xRRGGBB`.

Tracy colors every uncolored zone by its thread, so a project's ECS systems
would look like the engine's own work around them. A fixed blue lets a
reader find the project's code on the timeline at a glance.
