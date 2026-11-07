<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-808"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_settings::dropped_asset_path`

```rust
pub fn dropped_asset_path(response: &egui::Response) -> Option<String>;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_settings.rs:896`

Returns the path an asset from the Assets tab releases onto `response`,
when one is being dragged.

The type is checked first because egui's release helper *takes* the payload
it finds. Without the check, a picker the pointer happens to be over would
also consume a drag of another kind, such as a list row moving to a new
index.
