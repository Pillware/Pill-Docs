<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3423"></a>

# Function `pill_development_host::native_library::first_unresolved_import`

```rust
pub(in native_library) fn first_unresolved_import(artifact: &std::path::Path, workspace_root: &std::path::Path) -> Option<UnresolvedImport>;
```

Visibility: `{'restricted': {'parent': 3326, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:383`

The first import of `artifact` that a candidate copy of its library does
not export.

Two kinds of evidence answer, because the two image formats record
different things.

A PE import table attributes every symbol to the DLL it comes from, so the
first step reads those pairs straight out of it. An ELF image does not
attribute: an undefined symbol is resolved by searching `DT_NEEDED` in
order, so the table says which names are needed, never which library
defines them. The second step turns the question around for the engine
dylibs the artifact names - a symbol this build of the dylib exports, the
host's copy does not, and the artifact needs, is one that cannot resolve
against the copy the process mapped.

The candidates are the copies the loader would consider: the host's own
directory (a library the process already mapped wins by name), the
directory holding the loaded module, and the staged hot directory that the
module builds write. A library whose copies are all missing from disk is
skipped, because then only the loader's own message can explain the
failure.
