<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3325"></a>

# Function `pill_development_host::native_library::engine_dylib_file_name`

```rust
pub(in native_library) fn engine_dylib_file_name(stem: &str) -> String;
```

Visibility: `{'restricted': {'parent': 3326, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:92`

File name the loader looks up for the engine dylib `stem`.

The convention is the platform's rather than this crate's: `pill_core.dll`
on Windows, `libpill_core.so` on Linux, `libpill_core.dylib` on macOS.
`std::env::consts` spells it, and every path built for an engine dylib goes
through here - the build output, the host's copy, the staged copy and the
two paths a mismatch report names - so all of them always agree.
