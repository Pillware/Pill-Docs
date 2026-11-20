<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-83"></a>

# Function `pill_engine_core::abi::mirror::assets::add_named`

```rust
pub unsafe fn add_named<T>(packed_arguments: *const u8, return_buffer: *mut u8) -> u8 where T: Asset + TraitAccessible<dyn Asset> + MirrorValue;
```

Source: `engine\pill_engine_core\src\abi\mirror.rs:697`

`assets.add_named(name, value)`: slot 1 the name, slot 2 the value.

## Safety

As [`add`](fn.add.md#rustdoc-item-79).
