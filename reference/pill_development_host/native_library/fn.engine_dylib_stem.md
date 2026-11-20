<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3327"></a>

# Function `pill_development_host::native_library::engine_dylib_stem`

```rust
pub(in native_library) fn engine_dylib_stem(library_name: &str) -> Option<&'static str>;
```

Visibility: `{'restricted': {'parent': 3326, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:107`

The engine dylib stem a library name belongs to, if any.

The evidence a failed load is explained from names a library the way its
own format does: a PE import table says `pill_core.dll` whichever host
reads it, and an ELF `DT_NEEDED` entry says `libpill_core.so`. Both
spellings are accepted, so evidence from either format maps to the same
stem.
