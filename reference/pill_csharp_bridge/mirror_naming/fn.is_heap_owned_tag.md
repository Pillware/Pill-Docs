<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1743"></a>

# Function `pill_csharp_bridge::mirror_naming::is_heap_owned_tag`

```rust
pub fn is_heap_owned_tag(type_tag: &str) -> bool;
```

Source: `csharp\pill_csharp_bridge\src\mirror_naming.rs:105`

Tells whether a type tag names a field whose bytes are a header for a
buffer allocated elsewhere: a `vec:`/`string` container owned by the row,
or an engine-owned `dynbuf:` native buffer.

This repeats the engine's own container rule (`is_container_tag` in
`pill_engine_core::component_field`), which is private to that crate. The
two copies must agree. [`generated_field_signature`](fn.generated_field_signature.md#rustdoc-item-891) uses this rule to
answer `None` for a component whose public fields cannot be listed at all,
and the generator uses it to pick the fields that get accessor members.
