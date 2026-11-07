<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1255"></a>

# Function `pill_development_host::config::spawned_build_environment`

```rust
pub(crate) fn spawned_build_environment() -> Vec<(String, String)>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:1458`

Environment every host-spawned cargo build needs, on top of the host's own.

Both entries keep the spawned build's crate-metadata universe
byte-identical to the running host binary. `RUSTFLAGS` is cleared for LTO
profiles, where the workspace's `-C prefer-dynamic` cannot survive (rustc
rejects the pairing), and as the fail-safe described below. It is the only
lever, because cargo MERGES `build.rustflags` arrays, so an explicit empty
`RUSTFLAGS` wins. Under the dioxus CLI the build also copies dx's
`RUSTC_WORKSPACE_WRAPPER`: dx wraps every member's rustc invocation through
its own binary, cargo folds that path into the member crates'
`-C metadata`, and registry crates are unaffected. dx intercepts
linker-driver invocations only, and host builds link through `link.exe`, so
member compiles are passed through to the real `rustc`.

Fail-safe: under dx with an unresolvable wrapper path, `prefer-dynamic` is
dropped too and modules stay static. A static module loads regardless of
the wrapper hash, where a dynamic one fails with os error 127.
