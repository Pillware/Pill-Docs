<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-590"></a>

# Function `pill_development_host::build_runner::read_declared_features`

```rust
pub(in build_runner) fn read_declared_features(workspace_root: &std::path::Path, package_name: &str) -> Option<Vec<String>>;
```

Visibility: `{'restricted': {'parent': 546, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:624`

Reads a package's declared features without caching them, for
[`declared_features`](fn.declared_features.md#rustdoc-item-588).

It first tries the manifest of the extension crate the package names
([`crate::config::extension_crate_directory`](../config/fn.extension_crate_directory.md#rustdoc-item-589)), then every `Cargo.toml` up
to [`MEMBER_SEARCH_DEPTH`](constant.MEMBER_SEARCH_DEPTH.md#rustdoc-item-582) levels under `workspace_root`, and returns the
features of the first manifest whose package name matches.
