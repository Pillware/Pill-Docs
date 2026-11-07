<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1194"></a>

# Function `pill_csharp_bridge::csharp_runtime::host_string`

```rust
pub(in csharp_runtime) fn host_string(os_string: &std::ffi::OsStr) -> Result<Vec<u16>, pill_core::error::CSharpError>;
```

Visibility: `{'restricted': {'parent': 1118, 'path': '::csharp_runtime'}}` · Source: `csharp\pill_csharp_bridge\src\csharp_runtime.rs:521`

Encodes an OS string as nul-terminated UTF-16 for Windows `hostfxr`.

## Errors

Returns [`CSharpError::InteriorNul`] when the string contains a NUL byte
inside it, because the ABI call would then stop at that byte.
