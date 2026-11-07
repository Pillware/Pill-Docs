<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8661"></a>

# Type alias `pill_engine_core::world::scripting::ScriptUpdater`

```rust
pub(in world) type ScriptUpdater = fn (_: &mut crate::archetype::ComponentColumns, _: usize, _: crate::entity::Entity, _: *mut World, _: *mut crate::commands::CommandQueue);
```

Visibility: `{'restricted': {'parent': 8658, 'path': '::world'}}` · Source: `engine\pill_engine_core\src\world\scripting.rs:46`

Function that updates a script component.

Arguments: the component storage, the row index, the entity, and raw
pointers to the world and the command queue, from which the updater builds
a [`ScriptContext`](../../scripting/struct.ScriptContext.md#rustdoc-item-8100) for one dispatch.

## Safety

The two raw-pointer arguments are valid only for the duration of the call
that passes them. An implementation must not store either one, and a caller
must pass pointers that stay valid for the whole call. Being a plain `fn`
and not a closure is part of the contract: it cannot capture, so it has no
closure state in which to keep them.
