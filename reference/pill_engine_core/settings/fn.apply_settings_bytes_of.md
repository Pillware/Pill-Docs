<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8478"></a>

# Function `pill_engine_core::settings::apply_settings_bytes_of`

```rust
pub(in settings) unsafe fn apply_settings_bytes_of<T: SettingsAssetManager>(value_pointer: *mut u8, path: &std::path::Path, bytes: &[u8]) -> Result<SettingsOutcome, String>;
```

Visibility: `{'restricted': {'parent': 8477, 'path': '::settings'}}` · Source: `engine\pill_engine_core\src\settings.rs:172`

Applies a settings file's bytes to the `T` at `value_pointer`.

## Safety

`value_pointer` must point at a live, correctly aligned `T`.
