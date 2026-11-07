<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2297"></a>

# Constant `pill_engine_core::asset_store::MIN_ENTRY_LEN`

```rust
pub(in asset_store) const MIN_ENTRY_LEN: usize = _;
```

Visibility: `{'restricted': {'parent': 2228, 'path': '::asset_store'}}` · Source: `engine\pill_engine_core\src\asset_store.rs:183`

The fewest bytes one index entry can take. It holds a `u32` path length,
an empty path, and the `u64` offset and `u64` length.
