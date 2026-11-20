<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7008"></a>

# Constant `pill_engine_core::reflection::component_field::codec::ENTITY_REFERENCE_SIZE`

```rust
pub(in reflection::component_field::codec) const ENTITY_REFERENCE_SIZE: usize = _;
```

Visibility: `{'restricted': {'parent': 7007, 'path': '::reflection::component_field::codec'}}` · Source: `engine\pill_engine_core\src\reflection\component_field\codec.rs:46`

The byte size of an entity reference: the `u64` slot id, the `u32`
generation, and the padding `#[repr(C)]` puts after them.
