<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-95"></a>

# Function `pill_engine_core::abi::mirror::assets::import_standalone`

```rust
pub unsafe fn import_standalone<T>(packed_arguments: *const u8, return_buffer: *mut u8) -> u8 where T: StandaloneAsset;
```

Source: `engine\pill_engine_core\src\abi\mirror.rs:916`

`assets.import_standalone(path)`: slot 1 the path below `res`. Writes
the same return buffer as [`import`](fn.import.md#rustdoc-item-93).

## Safety

As [`add`](fn.add.md#rustdoc-item-79).
