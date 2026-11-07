<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-587"></a>

# Function `pill_development_host::build_runner::declared_features`

```rust
pub(crate) fn declared_features(workspace_root: &std::path::Path, package_name: &str) -> Option<Vec<String>>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\build_runner.rs:602`

Returns the feature names the package declares, read from its manifest among
the workspace members up to [`MEMBER_SEARCH_DEPTH`](constant.MEMBER_SEARCH_DEPTH.md#rustdoc-item-581) directories below
`workspace_root`, or `None` when no manifest names the package.

The result is cached per package, because the members do not change while a
host runs. The host's wrapper generation uses it to copy the extension's
declared features onto the wrapper's dependency edge.
