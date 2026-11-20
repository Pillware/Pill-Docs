<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3430"></a>

# Function `pill_development_host::native_library::files_equal_streaming`

```rust
pub(in native_library) fn files_equal_streaming(left: &std::path::Path, right: &std::path::Path) -> bool;
```

Visibility: `{'restricted': {'parent': 3326, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:774`

Exact byte compare of two files through two reused buffers.

The fallback for [`files_equal`](fn.files_equal.md#rustdoc-item-3431) once metadata has not already answered;
exits on the first differing chunk, so a differing pair costs one 64 KiB
read per side instead of a whole-file read on each.
