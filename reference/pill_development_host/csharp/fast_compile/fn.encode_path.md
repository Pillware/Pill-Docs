<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1421"></a>

# Function `pill_development_host::csharp::fast_compile::encode_path`

```rust
pub(in csharp::fast_compile) fn encode_path(path: &std::path::Path) -> Option<std::ffi::CString>;
```

Visibility: `{'restricted': {'parent': 1342, 'path': '::csharp::fast_compile'}}` · Source: `hosting\pill_development_host\src\csharp\fast_compile.rs:384`

Encode a path as NUL-terminated UTF-8 for the managed entry points.

Returns `None` when the path contains a NUL byte inside it, because such a
path cannot be passed across the boundary at all.
