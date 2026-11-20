<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-844"></a>

# Constant `pill_development_host::config::DEFAULT_EDITOR_FRONTEND`

```rust
pub(crate) const DEFAULT_EDITOR_FRONTEND: &str = "egui";
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:160`

The editor frontend name a configuration uses when its caller names none.

`pill_editor` names `egui` explicitly through
[`HostConfig::from_environment_for_editor_frontend`](struct.HostConfig.md#rustdoc-item-843). A crate that tags
itself for another frontend loads only under that frontend.
