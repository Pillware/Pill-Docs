<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3176"></a>

# Function `pill_development_host::native_library::files_equal`

```rust
pub(in native_library) fn files_equal(left: &std::path::Path, right: &std::path::Path) -> bool;
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:486`

Byte equality for two DLL files.

The length is checked first, because both files are multi-megabyte engine
dylibs compared on every `load_copy`, and a length mismatch already proves
inequality. Everything else goes through [`files_equal_streaming`](fn.files_equal_streaming.md#rustdoc-item-3175).

Timestamps cannot decide: a copied file keeps or renews its timestamp while
staying byte-identical, and two files can share one while differing. The
answer decides whether a module shares the host's engine instance or gets
its own staged copy. A wrong "different" would map `pill_core.dll` twice
and break the one-instance contract the engine's raw pointers rely on, so
only exact bytes may answer "equal".
