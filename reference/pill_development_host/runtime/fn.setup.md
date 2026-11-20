<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4373"></a>

# Function `pill_development_host::runtime::setup`

```rust
pub fn setup<impl Into<HostConfig>: Into<crate::HostConfig>>(host_config: impl Into<crate::HostConfig>) -> Result<DevHost, pill_core::error::HostError>;
```

Source: `hosting\pill_development_host\src\runtime.rs:1466`

Builds and loads every module, creates the engine, and starts the source
watchers.

## Errors

Returns a typed [`HostError`] naming the failing subsystem: configuration,
build, library loading, watcher startup, or managed backend startup.
