<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2728"></a>

# Function `pill_engine_core::ecs::archetype::drop_range_of`

```rust
pub(in ecs::archetype) unsafe fn drop_range_of<T>(rows_ptr: *mut u8, row_count: usize);
```

Visibility: `{'restricted': {'parent': 2144, 'path': '::ecs::archetype'}}` · Source: `engine\pill_engine_core\src\ecs\archetype.rs:2141`

Drops `row_count` values of type `T` starting at `rows_ptr`.

## Safety

`rows_ptr` must address `row_count` live, correctly aligned `T` values.
