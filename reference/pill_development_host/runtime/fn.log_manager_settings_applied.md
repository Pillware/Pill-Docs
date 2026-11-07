<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4215"></a>

# Function `pill_development_host::runtime::log_manager_settings_applied`

```rust
pub(in runtime) fn log_manager_settings_applied(settings_name: &str, path: &std::path::Path, outcome: pill_engine::SettingsOutcome, changed: bool);
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:3473`

Logs what one manager did with its settings document.

`changed` says the file differs from the one already applied, which is what
says an edit reached the running manager rather than a start-up pass
re-reading what it already had.
