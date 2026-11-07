<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-577"></a>

# Function `pill_development_host::build_runner::artifacts_are_host_built`

```rust
pub(in build_runner) fn artifacts_are_host_built(workspace_root: &std::path::Path, module_name: &str, source_identity: &str, build_command: &[String], artifacts: &[std::path::PathBuf]) -> bool;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:376`

Checks whether the artifacts on disk are the ones this host built with this
command.

A modification-time check alone cannot tell a host-built artifact from one
an unrelated `cargo build` wrote to the same path moments later: both are
newer than every source file. The recorded command, size and time close that
gap. The recorded `source_identity` closes the rest: package names are not
unique across projects, so two projects can build `project.dll` into the
same slot, and every timestamp then matches the wrong sources.
