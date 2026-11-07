<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-429"></a>

# Function `pill_project_ui::theme_reload_system`

```rust
pub(crate) fn theme_reload_system(game_ui: pill_engine_core::ResMut<'_, GameUi>, assets: pill_engine_core::Res<'_, pill_engine_core::AssetManager>) -> Result<(), pill_engine_core::SystemError>;
```

Visibility: `crate` · Source: `ui\pill_project_ui\src\lib.rs:620`

Re-merge and re-apply the theme when the override or a font changed.
