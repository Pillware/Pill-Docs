<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4801"></a>

# Type alias `pill_engine_core::ecs::world::scripting::ScriptDestroyAdapter`

```rust
pub(in ecs::world) type ScriptDestroyAdapter = fn (_: &mut crate::archetype::ComponentColumns, _: usize, _: crate::entity::Entity, _: *mut World, _: *mut crate::commands::CommandQueue, _: &crate::scripting::DestroyInfo);
```

Visibility: `{'restricted': {'parent': 4727, 'path': '::ecs::world'}}` · Source: `engine\pill_engine_core\src\ecs\world\scripting.rs:104`

Calls `on_destroy` on one script row.

Arguments are [`ScriptUpdateAdapter`](type.ScriptUpdateAdapter.md#rustdoc-item-4794)'s plus the information about why the
component stopped existing.

## Safety

The two raw-pointer arguments are valid only for the duration of the call
that passes them, exactly as [`ScriptUpdateAdapter`](type.ScriptUpdateAdapter.md#rustdoc-item-4794) states.
