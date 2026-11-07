<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-589"></a>

# Function `pill_development_host::build_runner::collect_member_manifests`

```rust
pub(in build_runner) fn collect_member_manifests(directory: &std::path::Path, depth: usize, manifests: &mut Vec<std::path::PathBuf>);
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:653`

Adds the candidate `Cargo.toml` path of every directory below `directory`,
down to `depth` levels, in breadth-first order so shallower members come
first.

Cargo's `target` directory and hidden directories are skipped: neither holds
a workspace member, and `target` alone holds thousands of entries.
