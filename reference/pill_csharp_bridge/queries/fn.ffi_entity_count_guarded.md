<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1882"></a>

# Function `pill_csharp_bridge::queries::ffi_entity_count_guarded`

```rust
pub(in queries) fn ffi_entity_count_guarded(count_output: *mut u32) -> u8;
```

Visibility: `{'restricted': {'parent': 1872, 'path': '::queries'}}` · Source: `csharp\pill_csharp_bridge\src\queries.rs:480`

Write the current entity count while a managed system is active.

Status codes:

- `0`: the count was written.
- `3`: no managed system is scheduled. The count alone could not show the
  difference from an empty world, so it gets its own status, which the
  managed wrapper turns into an exception.
- `5`: the caller passed no output buffer.

The count is `u32` by ABI design, so worlds above ~4.29 billion entities
are unsupported. See the `ComponentChunk` layout-limits documentation.
