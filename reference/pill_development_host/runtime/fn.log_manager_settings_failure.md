<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4475"></a>

# Function `pill_development_host::runtime::log_manager_settings_failure`

```rust
pub(in runtime) fn log_manager_settings_failure(settings_name: &str, path: &str, reason: &str);
```

Visibility: `{'restricted': {'parent': 4115, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:3694`

Logs a settings asset that could not be read, is not the manager's type, or
does not fit its document.
