<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-758"></a>

# Function `pill_development_host::build_runner::create_process_tree`

```rust
pub(crate) fn create_process_tree() -> Option<BuildProcessTree>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\build_runner.rs:1151`

Creates the process tree for a build that is about to be spawned.

It must run before the spawn: a process started before it joins sits outside
the tree and survives a cancellation.
