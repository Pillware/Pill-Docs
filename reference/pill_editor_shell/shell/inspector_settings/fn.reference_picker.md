<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-890"></a>

# Function `pill_editor_shell::shell::inspector_settings::reference_picker`

```rust
pub fn reference_picker(ui: &mut egui::Ui, field: &AssetReferenceField, anchor: egui::Rect, walk: &mut SettingsWalk<'_>) -> Option<Option<String>>;
```

Source: `editor\pill_editor_shell\src\shell\inspector_settings.rs:1057`

Draw the picker a reference opens under its row: every asset of the field's
target type that the listing holds, then the store's own entries, each with
the focus affordance that shows a candidate in the Assets panel.

Returns the choice made this frame: `Some(None)` clears the reference, and
`Some(Some(guid))` points it somewhere. The session's picker stays open
until the caller takes the choice. A list entry's picker offers no `None`,
because an entry leaves a list through its row's remove button, not by
being emptied in place.
