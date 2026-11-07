<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2463"></a>

# Function `pill_engine_core::asset_store::hard_link`

```rust
pub(in asset_store) fn hard_link(temporary: &std::path::Path, destination: &std::path::Path) -> std::io::Result<()>;
```

Visibility: `{'restricted': {'parent': 2228, 'path': '::asset_store'}}` · Source: `engine\pill_engine_core\src\asset_store.rs:820`

Creates a hard link, as the [`Link`](type.Link.md#rustdoc-item-2452) a real write passes to [`place_file`](fn.place_file.md#rustdoc-item-2451).
