<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1736"></a>

# Constant `pill_csharp_bridge::mirror_calls::HELD_ASSET_BYTES`

```rust
pub(in mirror_calls) const HELD_ASSET_BYTES: $crate::thread::LocalKey<std::cell::RefCell<Vec<u8>>> = _;
```

Visibility: `{'restricted': {'parent': 1727, 'path': '::mirror_calls'}}` · Source: `csharp\pill_csharp_bridge\src\mirror_calls.rs:65`

The bytes the last `ffi_asset_loader_read` on this thread handed out.
