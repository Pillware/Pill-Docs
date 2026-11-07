<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-844"></a>

# Function `pill_development_host::config::dioxus_executable_path`

```rust
pub(in config) fn dioxus_executable_path() -> Option<&'static std::path::Path>;
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:1408`

Canonical path of the `dx` executable that launched this host, if any.

dx builds by setting `RUSTC_WORKSPACE_WRAPPER` to its own canonical
executable path (dioxus-cli `build/request.rs`, `cargo_build_command`),
and cargo folds that exact path into the `-C metadata` hash of workspace
member crates (cargo `compiler/build_runner/compilation_files.rs`,
`compute_metadata`). Host-spawned builds must use the same path string for
their member crates to hash identically to the editor's. This function
therefore finds dx the same way dx finds itself: it prefers a wrapper value
already recorded in the environment, and otherwise looks `dx` up on `PATH`
and canonicalizes it. The result is cached because it is read for every
spawned build.
