<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-306"></a>

# Function `pill_engine::component_registry::copy_descriptors`

```rust
pub unsafe fn copy_descriptors<T: Copy>(descriptors: &[&'static T], out_descriptors: *mut T, max_descriptor_count: u32) -> u32;
```

Source: `engine\pill_engine\src\component_registry.rs:335`

Copy up to `max_descriptor_count` descriptors into `out_descriptors`,
returning how many were written.

The three copy exports - value types, mirror methods, field accessors -
answer the same question: the host sizes a buffer from the matching count
export, then asks for a copy of at most that many. The clamp and the write
loop live here once rather than in each expansion. A maximum larger than
the list copies the list; a maximum of zero writes nothing.

## Safety

`out_descriptors` must point at `max_descriptor_count` writable `T` slots
owned by the caller for the duration of this call, or be null when
`max_descriptor_count` is zero.
