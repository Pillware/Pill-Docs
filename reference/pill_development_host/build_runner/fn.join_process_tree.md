<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-759"></a>

# Function `pill_development_host::build_runner::join_process_tree`

```rust
pub(crate) fn join_process_tree(tree: Option<&BuildProcessTree>, child: &std::process::Child);
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\build_runner.rs:1167`

Adds a freshly spawned child to its build's process tree.

A refusal is reported but not fatal: the build still runs, with the weaker
guarantee that a cancellation reaches only the direct child.
