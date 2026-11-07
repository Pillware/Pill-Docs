<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-760"></a>

# Function `pill_development_host::build_runner::stop_process_tree`

```rust
pub(crate) fn stop_process_tree(tree: Option<&BuildProcessTree>, child: &mut std::process::Child);
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\build_runner.rs:1192`

Stops a build and its whole process tree.

The tree is terminated first and then waited for, because the next build
starts against the same `CARGO_TARGET_DIR` as soon as this returns. An
orphan still holding cargo's package lock would block that build for its
whole timeout, and an orphan still writing into the build tree would race
the copy into the staging directory.
