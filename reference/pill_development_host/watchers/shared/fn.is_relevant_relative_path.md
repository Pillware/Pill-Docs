<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4449"></a>

# Function `pill_development_host::watchers::shared::is_relevant_relative_path`

```rust
pub(in watchers::shared) fn is_relevant_relative_path(relative_path: &std::path::Path) -> bool;
```

Visibility: `{'restricted': {'parent': 4377, 'path': '::watchers::shared'}}` · Source: `hosting\pill_development_host\src\watchers\shared.rs:234`

Whether a path relative to the watch root should start a rebuild.

A build output directory is ignored only at the top of the watch tree;
deeper directories may legitimately use the same names. Hidden files and
directories, and editor temporary files, are excluded at any depth.
