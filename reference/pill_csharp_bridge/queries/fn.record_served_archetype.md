<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1871"></a>

# Function `pill_csharp_bridge::queries::record_served_archetype`

```rust
pub(in queries) fn record_served_archetype(status: u8, chunk_output: *mut super::abi::ComponentChunk);
```

Visibility: `{'restricted': {'parent': 1872, 'path': '::queries'}}` · Source: `csharp\pill_csharp_bridge\src\queries.rs:46`

Record the archetype of a chunk a validated term just served.

The entity path answers only for archetypes this invocation has already
served a chunk for. Recording happens exactly where a chunk is returned, so
a status that served nothing records nothing.
