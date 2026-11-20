<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-888"></a>

# Function `pill_editor_shell::shell::inspector_settings::dropped_asset_path`

```rust
pub fn dropped_asset_path(response: &egui::Response) -> Option<String>;
```

Source: `editor\pill_editor_shell\src\shell\inspector_settings.rs:894`

Returns the path an asset from the Assets tab releases onto `response`,
when one is being dragged.

The type is checked first because egui's release helper *takes* the payload
it finds. Without the check, a picker the pointer happens to be over would
also consume a drag of another kind, such as a list row moving to a new
index.
