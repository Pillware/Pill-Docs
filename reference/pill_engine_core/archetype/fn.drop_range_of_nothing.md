<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-709"></a>

# Function `pill_engine_core::archetype::drop_range_of_nothing`

```rust
pub(in archetype) unsafe fn drop_range_of_nothing(_rows_ptr: *mut u8, _row_count: usize);
```

Visibility: `{'restricted': {'parent': 110, 'path': '::archetype'}}` · Source: `engine\pill_engine_core\src\archetype.rs:2119`

Drops nothing: the element type owns no resources.

## Safety

Trivially safe - it reads neither argument.
