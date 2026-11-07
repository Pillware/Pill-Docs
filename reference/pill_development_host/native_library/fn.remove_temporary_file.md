<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3286"></a>

# Function `pill_development_host::native_library::remove_temporary_file`

```rust
pub(in native_library) fn remove_temporary_file(path: &std::path::Path);
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:1555`

Deletes one temporary copy and the generation directory it was staged in.

Both [`NativeLibrary`](struct.NativeLibrary.md#rustdoc-item-2092)'s `Drop` and [`TemporaryCopy`](struct.TemporaryCopy.md#rustdoc-item-3256)'s call this: they
remove the same kind of file for the same reason, and a failure has to be
reported in the same way from either one.
