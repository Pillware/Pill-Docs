<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4794"></a>

# Type alias `pill_engine_core::ecs::world::scripting::ScriptUpdateAdapter`

```rust
pub(in ecs::world) type ScriptUpdateAdapter = fn (_: &mut crate::archetype::ComponentColumns, _: usize, _: crate::entity::Entity, _: *mut World, _: *mut crate::commands::CommandQueue);
```

Visibility: `{'restricted': {'parent': 4727, 'path': '::ecs::world'}}` · Source: `engine\pill_engine_core\src\ecs\world\scripting.rs:56`

Calls `on_update` on one script row.

Arguments: the component storage, the row index, the entity, and raw
pointers to the world and the command queue, from which the adapter builds
a [`ScriptContext`](../../../systems/scripting/struct.ScriptContext.md#rustdoc-item-4793) for one call.

## Safety

The two raw-pointer arguments are valid only for the duration of the call
that passes them. An implementation must not store either one, and a caller
must pass pointers that stay valid for the whole call. Being a plain `fn`
and not a closure is part of the contract: it cannot capture, so it has no
closure state in which to keep them.
