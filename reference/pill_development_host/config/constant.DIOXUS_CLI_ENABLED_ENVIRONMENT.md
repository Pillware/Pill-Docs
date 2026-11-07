<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-845"></a>

# Constant `pill_development_host::config::DIOXUS_CLI_ENABLED_ENVIRONMENT`

```rust
pub(in config) const DIOXUS_CLI_ENABLED_ENVIRONMENT: &str = "DIOXUS_CLI_ENABLED";
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:184`

Environment variable the dioxus CLI sets on every app it launches.

Its presence tells the host it is running as an app built and served by
`dx`, which matters because dx builds by wrapping every workspace-member
rustc invocation through its own binary (see [`dioxus_executable_path`](fn.dioxus_executable_path.md#rustdoc-item-844)).
