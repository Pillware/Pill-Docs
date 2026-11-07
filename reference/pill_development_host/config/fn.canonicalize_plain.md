<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1253"></a>

# Function `pill_development_host::config::canonicalize_plain`

```rust
pub(in config) fn canonicalize_plain(path: &std::path::Path) -> Option<std::path::PathBuf>;
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:1389`

Canonicalize a path without the Windows `\\?\` verbatim prefix.

`std::fs::canonicalize` returns `\\?\C:\...` on Windows; dx canonicalizes
its own executable with `dunce` (which strips the prefix), and the two
strings must be byte-identical or cargo's metadata hash will not agree.
