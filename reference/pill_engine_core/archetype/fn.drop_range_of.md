<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-710"></a>

# Function `pill_engine_core::archetype::drop_range_of`

```rust
pub(in archetype) unsafe fn drop_range_of<T>(rows_ptr: *mut u8, row_count: usize);
```

Visibility: `{'restricted': {'parent': 110, 'path': '::archetype'}}` · Source: `engine\pill_engine_core\src\archetype.rs:2126`

Drops `row_count` values of type `T` starting at `rows_ptr`.

## Safety

`rows_ptr` must address `row_count` live, correctly aligned `T` values.
