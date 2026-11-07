<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6091"></a>

# Function `pill_engine_core::mirror::assets::contains`

```rust
pub unsafe fn contains<T>(packed_arguments: *const u8, return_buffer: *mut u8) -> u8 where T: Asset + TraitAccessible<dyn Asset>;
```

Source: `engine\pill_engine_core\src\mirror.rs:771`

`assets.contains(handle)`: slot 1 the handle. Returns a `bool`.

## Safety

As [`add`](fn.add.md#rustdoc-item-6086).
