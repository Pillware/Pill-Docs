<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6089"></a>

# Function `pill_engine_core::mirror::assets::remove`

```rust
pub unsafe fn remove<T>(packed_arguments: *const u8, return_buffer: *mut u8) -> u8 where T: Asset + TraitAccessible<dyn Asset> + MirrorObject;
```

Source: `engine\pill_engine_core\src\mirror.rs:748`

`assets.remove(handle)`: slot 1 the handle. Returns the removed value's
box, or null when the handle was stale.

## Safety

As [`add`](fn.add.md#rustdoc-item-6086).
