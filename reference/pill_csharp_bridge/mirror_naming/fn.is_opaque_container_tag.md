<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1744"></a>

# Function `pill_csharp_bridge::mirror_naming::is_opaque_container_tag`

```rust
pub fn is_opaque_container_tag(type_tag: &str) -> bool;
```

Source: `csharp\pill_csharp_bridge\src\mirror_naming.rs:92`

Tells whether a type tag names a Rust-owned container field. Such a field
gets no C# field of its own, because its pointer must never reach managed
code. Managed code reads its elements through the accessor members the
generator writes instead.

This is narrower than [`is_heap_owned_tag`](fn.is_heap_owned_tag.md#rustdoc-item-1743) on purpose. An engine-owned
`dynbuf:` buffer is mirrored as three private header words, so the generator
must not skip it the way it skips a `vec:`, while managed code still reads
its contents through accessors.
