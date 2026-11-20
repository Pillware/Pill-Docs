<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-90"></a>

# Function `pill_engine_core::abi::mirror::assets::guid_of`

```rust
pub unsafe fn guid_of<T>(packed_arguments: *const u8, _return_buffer: *mut u8) -> u8 where T: Asset + TraitAccessible<dyn Asset>;
```

Source: `engine\pill_engine_core\src\abi\mirror.rs:842`

`assets.guid_of(handle)`: slot 1 the handle. Returns the guid as a
string (empty when the asset has none).

## Safety

As [`add`](fn.add.md#rustdoc-item-79).
