<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1261"></a>

# Function `pill_development_host::config::csharp_build_configuration`

```rust
pub(in config) fn csharp_build_configuration() -> Result<&'static str, pill_core::error::ConfigError>;
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:1572`

MSBuild configuration the managed project is built in, from
[`CSHARP_CONFIGURATION_ENVIRONMENT_VARIABLE`](constant.CSHARP_CONFIGURATION_ENVIRONMENT_VARIABLE.md#rustdoc-item-826); `Release` when it is unset.

The value is matched without regard to case but returned in MSBuild's own
spelling, because the result also names the output directory the host loads
from.

## Errors

Returns [`ConfigError::InvalidEnvironmentVariable`] for any other value,
rather than falling back. A mistyped `Debug` that silently built `Release`
would leave the debugger showing optimized-away local variables with no
hint why.
