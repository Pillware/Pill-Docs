<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-176"></a>

# Function `pill_standalone::posture::compiled_posture::setup_driver`

```rust
pub fn setup_driver(project: pill_development_host::HostConfig) -> Result<pill_development_host::DevHost, pill_core::error::HostError>;
```

Source: `frontends\pill_standalone\src\posture.rs:53`

Builds and loads the project and its extensions, then starts their
source watchers.

## Errors

Returns a [`HostError`] naming the failing subsystem: configuration,
build, library loading, watcher startup or managed backend startup.
