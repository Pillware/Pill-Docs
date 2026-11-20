<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2727"></a>

# Function `pill_engine_core::ecs::archetype::drop_range_of_nothing`

```rust
pub(in ecs::archetype) unsafe fn drop_range_of_nothing(_rows_ptr: *mut u8, _row_count: usize);
```

Visibility: `{'restricted': {'parent': 2144, 'path': '::ecs::archetype'}}` · Source: `engine\pill_engine_core\src\ecs\archetype.rs:2134`

Drops nothing: the element type owns no resources.

## Safety

Trivially safe - it reads neither argument.
