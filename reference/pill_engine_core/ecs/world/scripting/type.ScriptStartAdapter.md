<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4797"></a>

# Type alias `pill_engine_core::ecs::world::scripting::ScriptStartAdapter`

```rust
pub(in ecs::world) type ScriptStartAdapter = fn (_: &mut crate::archetype::ComponentColumns, _: usize, _: crate::entity::Entity, _: *mut World, _: *mut crate::commands::CommandQueue, _: &crate::scripting::StartInfo);
```

Visibility: `{'restricted': {'parent': 4727, 'path': '::ecs::world'}}` · Source: `engine\pill_engine_core\src\ecs\world\scripting.rs:80`

Calls `on_start` on one script row.

Arguments are [`ScriptUpdateAdapter`](type.ScriptUpdateAdapter.md#rustdoc-item-4794)'s plus the information about why the
script started running.

## Safety

The two raw-pointer arguments are valid only for the duration of the call
that passes them, exactly as [`ScriptUpdateAdapter`](type.ScriptUpdateAdapter.md#rustdoc-item-4794) states.
