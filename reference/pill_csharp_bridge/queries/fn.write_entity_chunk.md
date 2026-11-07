<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1874"></a>

# Function `pill_csharp_bridge::queries::write_entity_chunk`

```rust
pub(in queries) fn write_entity_chunk(chunk_output: *mut super::abi::ComponentChunk, archetype: pill_engine::archetype::ArchetypeId, entities: &[pill_engine::Entity], change_tick: u32, scope_token: u32);
```

Visibility: `{'restricted': {'parent': 1872, 'path': '::queries'}}` · Source: `csharp\pill_csharp_bridge\src\queries.rs:101`

Write one archetype's entity column chunk into the managed caller's output
buffer.

Entity rows arrive through the const `entities` slot, with `data` and
`ticks` null. That is the read-only contract the ABI documents, so managed
code has no way to express a write through an entity column.
