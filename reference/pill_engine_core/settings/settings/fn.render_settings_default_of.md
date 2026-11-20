<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10303"></a>

# Function `pill_engine_core::settings::settings::render_settings_default_of`

```rust
pub(in settings::settings) fn render_settings_default_of<T: SettingsAssetManager>(guid: crate::asset::AssetGuid) -> Result<Vec<u8>, String>;
```

Visibility: `{'restricted': {'parent': 10304, 'path': '::settings::settings'}}` · Source: `engine\pill_engine_core\src\settings\settings.rs:162`

Renders a settings file holding `T`'s document defaults.
