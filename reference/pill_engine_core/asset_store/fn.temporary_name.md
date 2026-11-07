<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2460"></a>

# Function `pill_engine_core::asset_store::temporary_name`

```rust
pub(in asset_store) fn temporary_name(file_name: &std::ffi::OsStr) -> std::ffi::OsString;
```

Visibility: `{'restricted': {'parent': 2228, 'path': '::asset_store'}}` · Source: `engine\pill_engine_core\src\asset_store.rs:810`

A sibling name for `file_name` that no other writer in this or another
process picks at the same time.
