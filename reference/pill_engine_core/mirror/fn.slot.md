<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6118"></a>

# Function `pill_engine_core::mirror::slot`

```rust
pub unsafe fn slot(packed_arguments: *const u8, slot_index: usize) -> *const u8;
```

Source: `engine\pill_engine_core\src\mirror.rs:167`

Address of argument slot `slot_index`.

## Safety

`packed_arguments` must point at a buffer of at least `slot_index + 1`
slots.
