<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-722"></a>

# Function `pill_csharp_bridge::commands::ffi_reserve_entity_guarded`

```rust
pub(in commands) fn ffi_reserve_entity_guarded(entity_output: *mut pill_engine::Entity) -> u8;
```

Visibility: `{'restricted': {'parent': 697, 'path': '::commands'}}` · Source: `csharp\pill_csharp_bridge\src\commands.rs:85`

Reserve a generation-checked entity handle without inserting the entity
into an archetype.

A reservation that no create consumes goes back to the entity allocator
when the invocation scope ends.
