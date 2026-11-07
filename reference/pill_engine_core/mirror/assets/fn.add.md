<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6086"></a>

# Function `pill_engine_core::mirror::assets::add`

```rust
pub unsafe fn add<T>(packed_arguments: *const u8, return_buffer: *mut u8) -> u8 where T: Asset + TraitAccessible<dyn Asset> + MirrorValue;
```

Source: `engine\pill_engine_core\src\mirror.rs:677`

`assets.add(value)`: slot 1 the value. Returns its handle.

## Safety

The trampoline contract: `packed_arguments` holds the slots described
above, and `return_buffer` is writable for 16 bytes.
