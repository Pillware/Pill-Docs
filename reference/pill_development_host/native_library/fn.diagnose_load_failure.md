<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3427"></a>

# Function `pill_development_host::native_library::diagnose_load_failure`

```rust
pub(in native_library) fn diagnose_load_failure(error: pill_core::error::LibraryError, artifact: &std::path::Path, workspace_root: &std::path::Path, module_name: &str) -> pill_core::error::LibraryError;
```

Visibility: `{'restricted': {'parent': 3326, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:503`

Explains a load failure with the best evidence available.

The module's own import and export tables are read first. A symbol that no
candidate copy of its library exports is a concrete answer that names both
the library and the symbol, where the loader only said "procedure could not
be found" (Windows) or `undefined symbol: <name>` (Linux). The engine-dylib
explanation is used only for the cases it truly covers: the unresolved
import belongs to the mismatching dylib, or nothing else explains the
failure.
