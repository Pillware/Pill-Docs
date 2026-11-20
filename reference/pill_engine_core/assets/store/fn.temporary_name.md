<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2012"></a>

# Function `pill_engine_core::assets::store::temporary_name`

```rust
pub(in assets::store) fn temporary_name(file_name: &std::ffi::OsStr) -> std::ffi::OsString;
```

Visibility: `{'restricted': {'parent': 1779, 'path': '::assets::store'}}` · Source: `engine\pill_engine_core\src\assets\store.rs:810`

A sibling name for `file_name` that no other writer in this or another
process picks at the same time.
