<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7433"></a>

# Function `pill_engine_core::resource::drop_in_place_of`

```rust
pub(in resource) unsafe fn drop_in_place_of<T>(ptr: *mut u8);
```

Visibility: `{'restricted': {'parent': 1162, 'path': '::resource'}}` · Source: `engine\pill_engine_core\src\resource.rs:529`

Drop the `T` at `ptr`.

## Safety

`ptr` must point at a live, correctly aligned `T`.
