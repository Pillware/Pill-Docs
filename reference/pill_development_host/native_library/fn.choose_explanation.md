<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3166"></a>

# Function `pill_development_host::native_library::choose_explanation`

```rust
pub(in native_library) fn choose_explanation(unresolved: Option<UnresolvedImport>, unresolved_mismatch: Option<(std::path::PathBuf, std::path::PathBuf)>, fallback_mismatch: Option<(std::path::PathBuf, std::path::PathBuf)>) -> LoadFailureExplanation;
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:240`

The explanation the gathered evidence supports.

Usually the missing import wins, because it names both a symbol and a
file. It gives way to the engine-dylib explanation only when the import
belongs to an engine dylib whose module-world copy really differs; that
mismatch is then what makes the symbol unresolvable, and the answer names
both builds. The function is pure, so the decision can be unit-tested
without files on disk.

`unresolved_mismatch` is the mismatch pair for the unresolved import's own
engine dylib, when it is one and it differs. `fallback_mismatch` is the
first differing engine pair, used when there is no unresolved import.
