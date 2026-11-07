<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-575"></a>

# Function `pill_development_host::build_runner::artifact_stamp`

```rust
pub(in build_runner) fn artifact_stamp(build_identity: &str, source_identity: &str, build_command: &[String], artifacts: &[std::path::PathBuf]) -> Option<String>;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:311`

Describes the artifacts a build produced, together with the host identity,
the sources and the command that produced them.

`build_identity` is [`current_build_info`](fn.current_build_info.md#rustdoc-item-572) and `source_identity` the watch
directory. Both stay in the stamp because two hosts - or two projects sharing
a package name, an output path and a stamp file - would otherwise both
accept the same stamp, and one would load the other's artifact and fail
inside `LoadLibrary` with no explanation.

Returns `None` when an artifact is missing or unreadable. The callers treat
that as "not host-built", which means they run cargo.
