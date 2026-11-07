<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-776"></a>

# Function `pill_development_host::build_runner::is_shared_slot_rlib`

```rust
pub(crate) fn is_shared_slot_rlib(file_name: &str) -> bool;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\build_runner.rs:1908`

Checks whether a `deps` filename is a shared per-crate slot rather than a
hash-qualified artifact.

Cargo appends `-<16 hex digits>` to a crate's filename when the artifact is
specific to one resolved configuration. A name without that suffix is the
shared slot that every build of that crate name writes to, and it is the only
kind another build can silently replace. The patch linker
(`hot_patch::compile`) and [`stage_shared_dependency_rlibs`](fn.stage_shared_dependency_rlibs.md#rustdoc-item-775) must agree about
which files are shared. Otherwise a file can be staged and never linked, or
linked and never staged, so both call this one implementation.
