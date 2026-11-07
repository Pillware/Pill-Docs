<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3291"></a>

# Function `pill_development_host::native_library::staging_last_write`

```rust
pub(in native_library) fn staging_last_write(path: &std::path::Path) -> std::time::SystemTime;
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:1747`

Returns when a staging directory was last written to.

When the timestamp cannot be read this falls back to the epoch, which makes
an unreadable directory look as old as possible. That is deliberate: leaving
such a directory forever is worse than trying to remove it, and the attempt
only fails if the files are still in use.
