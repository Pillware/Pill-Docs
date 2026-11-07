<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1880"></a>

# Function `pill_csharp_bridge::queries::ffi_get_entity_chunk_guarded`

```rust
pub(in queries) fn ffi_get_entity_chunk_guarded(chunk_index: u32, chunk_output: *mut super::abi::ComponentChunk) -> u8;
```

Visibility: `{'restricted': {'parent': 1872, 'path': '::queries'}}` · Source: `csharp\pill_csharp_bridge\src\queries.rs:430`

Return the entity column of the archetype at `chunk_index`.

The slice written to `chunk_output` holds the `Entity` values of one
archetype. It is valid only while the managed system that made the call is
running, so the caller must not keep it after the call returns.
