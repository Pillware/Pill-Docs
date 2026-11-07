<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6358"></a>

# Type alias `pill_engine_core::persistence::registry::RestoreResourceFn`

```rust
pub type RestoreResourceFn = fn (world: &mut crate::world::World, bytes: &[u8]) -> bool;
```

Source: `engine\pill_engine_core\src\persistence\registry.rs:478`

Rebuilds one resource from snapshot bytes and inserts it into the world.

Returns whether the payload could be read. A value that no longer parses
under the current shape is logged and skipped instead of being inserted
half-formed, the same way an unreadable component row is handled.
