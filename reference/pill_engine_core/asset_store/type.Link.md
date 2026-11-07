<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2452"></a>

# Type alias `pill_engine_core::asset_store::Link`

```rust
pub(in asset_store) type Link = fn (_: &std::path::Path, _: &std::path::Path) -> std::io::Result<()>;
```

Visibility: `{'restricted': {'parent': 2228, 'path': '::asset_store'}}` · Source: `engine\pill_engine_core\src\asset_store.rs:670`

The link operation [`place_file`](fn.place_file.md#rustdoc-item-2451) tries first, so a test can stand in a
filesystem that has no hard links.
