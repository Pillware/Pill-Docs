<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-767"></a>

# Function `pill_development_host::build_runner::stage_build_outputs`

```rust
pub(in build_runner) fn stage_build_outputs(workspace_root: &std::path::Path, library_paths: (&std::path::Path, &std::path::Path), rlib: Option<(&std::path::Path, &std::path::Path)>, require_rlib: bool) -> Result<Vec<std::path::PathBuf>, pill_core::error::BuildError>;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:1753`

Copies everything one build produced into the host's private hot-load paths.

Both build paths end the same way, so the sequence lives here once. It
handles the shared-slot collision that makes the host load a
differently-featured artifact, and it copies the dependency rlibs a later
patch links before another build can overwrite them.

`rlib` is `None` for a crate that produces none. `require_rlib` says whether a
missing one is an error. The project always produces an rlib, so a missing one
means something is wrong. An extension that declares only a `cdylib`
legitimately has none, which leaves the fast path idle.

Returns the staged paths in the order a stamp should record them.

## Errors

Returns [`BuildError::OutputMissing`] when the build produced no library to
stage, and [`BuildError::HotArtifactCopyFailed`] when a copy into the
hot-load directory fails.
