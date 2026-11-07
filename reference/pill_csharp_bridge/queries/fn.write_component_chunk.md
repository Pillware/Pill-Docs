<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1873"></a>

# Function `pill_csharp_bridge::queries::write_component_chunk`

```rust
pub(in queries) fn write_component_chunk(chunk_output: *mut super::abi::ComponentChunk, archetype: pill_engine::archetype::ArchetypeId, column_rows: *mut u8, row_count: usize, element_size: usize, ticks: *mut pill_engine::ComponentTicks, change_tick: u32, scope_token: u32);
```

Visibility: `{'restricted': {'parent': 1872, 'path': '::queries'}}` · Source: `csharp\pill_csharp_bridge\src\queries.rs:66`

Write one component column chunk into the managed caller's output buffer.

`column_rows` and `ticks` stay owned by the active world's archetype and
are valid only during the managed invocation that requested the chunk,
exactly as [`ComponentChunk`](../abi/struct.ComponentChunk.md#rustdoc-item-160) documents.
