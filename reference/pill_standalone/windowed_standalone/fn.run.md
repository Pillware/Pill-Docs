<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-263"></a>

# Function `pill_standalone::windowed_standalone::run`

```rust
pub fn run(project: pill_development_host::HostConfig) -> Result<(), crate::error::RunError>;
```

Source: `frontends\pill_standalone\src\windowed_standalone.rs:572`

Run the project in a native window.

## Errors

Returns [`RunError`](../error/enum.RunError.md#rustdoc-item-105) if the event loop cannot be created or run, or if
window creation, setup or the renderer fails inside the event loop.
