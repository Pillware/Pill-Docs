<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8476"></a>

# Function `pill_engine_core::settings::render_settings_default_of`

```rust
pub(in settings) fn render_settings_default_of<T: SettingsAssetManager>(guid: crate::asset::AssetGuid) -> Result<Vec<u8>, String>;
```

Visibility: `{'restricted': {'parent': 8477, 'path': '::settings'}}` · Source: `engine\pill_engine_core\src\settings.rs:162`

Renders a settings file holding `T`'s document defaults.
