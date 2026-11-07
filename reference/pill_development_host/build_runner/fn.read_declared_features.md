<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-588"></a>

# Function `pill_development_host::build_runner::read_declared_features`

```rust
pub(in build_runner) fn read_declared_features(workspace_root: &std::path::Path, package_name: &str) -> Option<Vec<String>>;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:623`

Reads a package's declared features without caching them, for
[`declared_features`](fn.declared_features.md#rustdoc-item-587).

It first tries the extension manifest
(`extensions/<folder>/<package>/Cargo.toml`), then every `Cargo.toml` up to
[`MEMBER_SEARCH_DEPTH`](constant.MEMBER_SEARCH_DEPTH.md#rustdoc-item-581) levels under `workspace_root`, and returns the
features of the first manifest whose package name matches.
