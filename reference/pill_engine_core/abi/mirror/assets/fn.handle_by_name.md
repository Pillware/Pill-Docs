<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-88"></a>

# Function `pill_engine_core::abi::mirror::assets::handle_by_name`

```rust
pub unsafe fn handle_by_name<T>(packed_arguments: *const u8, return_buffer: *mut u8) -> u8 where T: Asset + TraitAccessible<dyn Asset>;
```

Source: `engine\pill_engine_core\src\abi\mirror.rs:792`

`assets.handle_by_name(name)`: slot 1 the name. Returns an
`option:handle`.

## Safety

As [`add`](fn.add.md#rustdoc-item-79), with `return_buffer` holding an `option:` result.
