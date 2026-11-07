<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-841"></a>

# Constant `pill_development_host::config::HOST_MODULE_MEMBER_PREFIX`

```rust
pub(crate) const HOST_MODULE_MEMBER_PREFIX: &str = "host_module_";
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:158`

Name prefix of the generated workspace member that builds one extension's
loadable artifact.

The host writes one wrapper per loaded extension crate, into the
[`GENERATED_DIRECTORY`](constant.GENERATED_DIRECTORY.md#rustdoc-item-834) of the extension folder that holds the crate, so
the `extensions/*/generated/*` glob finds it. The wrapper is the `cdylib`;
the extension stays a plain library inside it. That is what lets the module
build and every project build compile one identical copy of the extension.
