<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-138"></a>

# Function `pill_engine_core::abi::mirror::read_value_vec`

```rust
pub unsafe fn read_value_vec<T: MirrorValue>(address: *const u8) -> MirrorResult<Vec<T>>;
```

Source: `engine\pill_engine_core\src\abi\mirror.rs:346`

Read a `slice:` slot of named values into an owned vector.

## Errors

Returns an error when the slot names elements but points at nothing, and the
error [`MirrorValue::read_element`](trait.MirrorValue.md#rustdoc-item-136) reports for one of them.

## Safety

The slot must describe `value_count` elements laid out as `T`'s
[`MirrorValue::ELEMENT_SIZE`](trait.MirrorValue.md#rustdoc-item-137) promises.
