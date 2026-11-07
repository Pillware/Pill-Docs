<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3073"></a>

# Function `pill_development_host::native_library::engine_dylib_needs_isolation`

```rust
pub(in native_library) fn engine_dylib_needs_isolation(workspace_root: &std::path::Path) -> bool;
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:181`

Whether a module build produced engine dylibs that differ from the host's
copies, which means the module must load against its own.

When every pair is byte-identical (a plain CLI host whose feature set
matches the module build), the module keeps loading the host's single
instances. Only a host whose dependency graph adds different features to
the shared engine crates (a GUI frontend) needs the isolated copies. The
whole set is staged together: a module's `pill_engine_core.dll` imports
`pill_core.dll`, and the UI dylibs share type identity across the boundary.
A module that resolved some engine dylibs from one build and the rest from
another would get mismatched symbol hashes and two `Theme` types.
