<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4622"></a>

# Function `pill_engine_core::ecs::resource::drop_in_place_of`

```rust
pub(in ecs::resource) unsafe fn drop_in_place_of<T>(ptr: *mut u8);
```

Visibility: `{'restricted': {'parent': 4292, 'path': '::ecs::resource'}}` · Source: `engine\pill_engine_core\src\ecs\resource.rs:691`

Drop the `T` at `ptr`.

## Safety

`ptr` must point at a live, correctly aligned `T`.
