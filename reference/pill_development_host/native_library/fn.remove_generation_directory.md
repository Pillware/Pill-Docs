<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3287"></a>

# Function `pill_development_host::native_library::remove_generation_directory`

```rust
pub(in native_library) fn remove_generation_directory(directory: &std::path::Path);
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:1581`

Removes one generation's directory and keeps whatever the process still
maps.

The directory holds the copy, the module's PDB and, when the engine was
isolated, copies of the engine dylibs. That is one directory per load, and
tens of megabytes if nothing takes it away. A mapped image cannot be deleted
on a platform that locks its files, so whatever refuses to go is named at
debug level instead of warned about, and a later start removes the directory
once the grace period has passed.

Only a `<staging>/<pid>/<module>_<stamp>_<n>` directory is removed, never the
process directory itself, which holds the generated hot-patch sources and
images that stay for the life of the process.
