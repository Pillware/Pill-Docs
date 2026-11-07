<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1254"></a>

# Function `pill_development_host::config::dioxus_wrapper_args_directory`

```rust
pub(in config) fn dioxus_wrapper_args_directory() -> std::path::PathBuf;
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:1437`

Directory dx's wrapper writes captured member rustc invocations into.

dx acts as a rustc wrapper only when `DX_RUSTC` names a directory. It
records one JSON file per member crate there (this host never reads them
back) and then runs the real `rustc`. A private temp directory keeps these
host-driven captures out of dx's own `target/dx/.captured-args` scope,
which `dx serve` reads for its own thin-rebuild replay.
