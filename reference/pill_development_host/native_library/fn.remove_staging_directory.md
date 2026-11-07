<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3292"></a>

# Function `pill_development_host::native_library::remove_staging_directory`

```rust
pub(in native_library) fn remove_staging_directory(path: &std::path::Path, pid: u32, reason: &str);
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:1758`

Removes one staging directory and logs which one went and why.

A failure on another process's directory is expected rather than
exceptional, because a live host keeps its mapped modules locked. It is
logged as a note, not as an error.
