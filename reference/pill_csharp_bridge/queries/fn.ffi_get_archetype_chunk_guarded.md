<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1878"></a>

# Function `pill_csharp_bridge::queries::ffi_get_archetype_chunk_guarded`

```rust
pub(in queries) fn ffi_get_archetype_chunk_guarded(archetype_low: u64, archetype_high: u64, stable_id_low: u64, stable_id_high: u64, request_mode: u8, chunk_output: *mut super::abi::ComponentChunk) -> u8;
```

Visibility: `{'restricted': {'parent': 1872, 'path': '::queries'}}` · Source: `csharp\pill_csharp_bridge\src\queries.rs:290`

Return one component chunk of an archetype the managed enumerator already
identified through its driver chunk.

Managed query iterators call this once per archetype for each non-driver
term, instead of scanning chunk indices until the archetypes match.

`Engine.TryGetArchetypeChunk` on the managed side reads these status codes:

- `0`: nothing to serve. For a component term, the archetype does not carry
  the component, so an optional term is absent.
- `1`: the output holds a complete chunk.
- `2`: the component is unknown, or a module binding no longer matches the
  live column's element size.
- `3`: no managed system is running on this thread.
- `4`: the running system did not declare the requested access, or this
  invocation has not served the archetype yet.
- `5`: the caller passed no output buffer.

A `request_mode` of `2` asks for the archetype's entity column instead of a
component. That column belongs to no component, so there is no access
declaration to check.
