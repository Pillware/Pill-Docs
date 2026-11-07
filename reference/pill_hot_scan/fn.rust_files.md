<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-215"></a>

# Function `pill_hot_scan::rust_files`

```rust
pub(crate) fn rust_files(root: &std::path::Path) -> Vec<std::path::PathBuf>;
```

Visibility: `crate` · Source: `hosting\pill_hot_scan\src\lib.rs:1398`

Every `.rs` file under `root`, in stable order so the generated file does not
churn between builds.
