<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2005"></a>

# Type alias `pill_engine_core::assets::store::Link`

```rust
pub(in assets::store) type Link = fn (_: &std::path::Path, _: &std::path::Path) -> std::io::Result<()>;
```

Visibility: `{'restricted': {'parent': 1779, 'path': '::assets::store'}}` · Source: `engine\pill_engine_core\src\assets\store.rs:670`

The link operation [`place_file`](fn.place_file.md#rustdoc-item-2004) tries first, so a test can stand in a
filesystem that has no hard links.
