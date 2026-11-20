<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3330"></a>

# Function `pill_development_host::native_library::engine_dylib_staging_steers_the_loader`

```rust
pub(in native_library) fn engine_dylib_staging_steers_the_loader() -> bool;
```

Visibility: `{'restricted': {'parent': 3326, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:125`

Whether staging engine dylibs beside a module can change what the loader
maps.

Only a loader that searches the loaded library's own directory can be
steered that way, and that is what
[`LOAD_WITH_ALTERED_SEARCH_PATH`](constant.LOAD_WITH_ALTERED_SEARCH_PATH.md#rustdoc-item-3328) asks Windows for. A Unix loader resolves
a `DT_NEEDED` entry by name against the objects already mapped in the
process *before* it searches any path, and this host maps the engine dylibs
at startup, so a copy beside the module is never consulted. Staging there
would copy hundreds of megabytes per load for nothing, and the mismatch is
reported instead - see [`LoadFailureExplanation::EngineDylibMismatch`](enum.LoadFailureExplanation.md#rustdoc-item-3329).
