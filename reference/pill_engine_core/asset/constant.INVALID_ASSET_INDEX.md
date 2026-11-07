<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-929"></a>

# Constant `pill_engine_core::asset::INVALID_ASSET_INDEX`

```rust
pub const INVALID_ASSET_INDEX: u32 = u32::MAX;
```

Source: `engine\pill_engine_core\src\asset.rs:282`

The slot index that [`Handle::INVALID`](struct.Handle.md#rustdoc-item-870) carries.

This is a named constant rather than a value written inline because the
field layer saves a reference as a plain index and generation pair. The
sentinel for "no asset" has to be the same value everywhere a reference is
saved, restored or cleared.
