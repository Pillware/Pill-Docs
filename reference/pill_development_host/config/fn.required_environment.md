<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1278"></a>

# Function `pill_development_host::config::required_environment`

```rust
pub(in config) fn required_environment(variable: &'static str) -> Result<String, pill_core::error::ConfigError>;
```

Visibility: `{'restricted': {'parent': 823, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:1719`

Read a required configuration variable or report it as missing.

## Errors

Returns [`ConfigError::MissingEnvironmentVariable`] when the variable is
absent, so callers can fix the launch environment in one step.
