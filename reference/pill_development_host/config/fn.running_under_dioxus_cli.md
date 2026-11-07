<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1252"></a>

# Function `pill_development_host::config::running_under_dioxus_cli`

```rust
pub(crate) fn running_under_dioxus_cli() -> bool;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:1380`

Whether this host binary is running as an app launched by the dioxus CLI.

`dx serve` and `dx run` set `DIOXUS_CLI_ENABLED` (plus `DIOXUS_BUILD_ID`
and friends) on the environment of every app they build and launch
(dioxus-cli `build/builder.rs`, `child_environment_variables`); a plain
`cargo run` never sets it. That is what separates the dx-built editor -
whose engine dylibs carry dx's workspace-wrapper hash - from every other
host. [`crate::build_runner::apply_cargo_host_overrides`](../build_runner/fn.apply_cargo_host_overrides.md#rustdoc-item-582) reads it too,
because it keeps the cargo anchor for editor hosts and dx-launched hosts:
the editor's renderer graph must be present when project modules are
built, and under dx its macro graph adds features to proc-macro units that
the engine manifests cannot list.
