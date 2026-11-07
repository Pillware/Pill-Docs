<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6093"></a>

# Function `pill_engine_core::mirror::assets::handle_by_guid`

```rust
pub unsafe fn handle_by_guid<T>(packed_arguments: *const u8, return_buffer: *mut u8) -> u8 where T: Asset + TraitAccessible<dyn Asset>;
```

Source: `engine\pill_engine_core\src\mirror.rs:817`

`assets.handle_by_guid(guid)`: slot 1 the guid as hexadecimal. Returns
an `option:handle`.

## Safety

As [`handle_by_name`](fn.handle_by_name.md#rustdoc-item-6092).
