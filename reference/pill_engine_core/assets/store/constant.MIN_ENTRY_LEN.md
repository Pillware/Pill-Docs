<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1848"></a>

# Constant `pill_engine_core::assets::store::MIN_ENTRY_LEN`

```rust
pub(in assets::store) const MIN_ENTRY_LEN: usize = _;
```

Visibility: `{'restricted': {'parent': 1779, 'path': '::assets::store'}}` · Source: `engine\pill_engine_core\src\assets\store.rs:183`

The fewest bytes one index entry can take. It holds a `u32` path length,
an empty path, and the `u64` offset and `u64` length.
