<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1279"></a>

# Function `pill_development_host::config::resolve_dependency_path`

```rust
pub(in config) fn resolve_dependency_path(project_root: &std::path::Path, dependency_entry: &mut toml_edit::Item) -> Option<String>;
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:2059`

Rewrites one dependency entry's `path` to an absolute location and returns
the resolved path.

Handles both shapes a dependency takes in a `Cargo.toml`: an inline table
and its own sub-table. An entry with no `path` (a registry dependency) is
left alone and returns `None`.
