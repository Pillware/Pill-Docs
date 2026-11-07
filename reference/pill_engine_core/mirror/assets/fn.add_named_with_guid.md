<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6088"></a>

# Function `pill_engine_core::mirror::assets::add_named_with_guid`

```rust
pub unsafe fn add_named_with_guid<T>(packed_arguments: *const u8, return_buffer: *mut u8) -> u8 where T: Asset + TraitAccessible<dyn Asset> + MirrorValue;
```

Source: `engine\pill_engine_core\src\mirror.rs:722`

`assets.add_named_with_guid(name, guid, value)`: slot 1 the name, slot 2
the guid as 32 hexadecimal digits, slot 3 the value.

## Safety

As [`add`](fn.add.md#rustdoc-item-6086).
