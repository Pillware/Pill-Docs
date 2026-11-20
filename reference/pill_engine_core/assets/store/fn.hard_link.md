<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2015"></a>

# Function `pill_engine_core::assets::store::hard_link`

```rust
pub(in assets::store) fn hard_link(temporary: &std::path::Path, destination: &std::path::Path) -> std::io::Result<()>;
```

Visibility: `{'restricted': {'parent': 1779, 'path': '::assets::store'}}` · Source: `engine\pill_engine_core\src\assets\store.rs:820`

Creates a hard link, as the [`Link`](type.Link.md#rustdoc-item-2005) a real write passes to [`place_file`](fn.place_file.md#rustdoc-item-2004).
