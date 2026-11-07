<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-794"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_settings::asset_settings_rows`

```rust
pub fn asset_settings_rows(ui: &mut egui::Ui, asset_path: &str, settings: &JsonValue, references: &[AssetReferenceField], walk: &mut SettingsWalk<'_>);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_settings.rs:155`

Draw the settings document's rows: objects and arrays nest their children,
and every scalar leaf edits.

With `walk.read_only` set, every row reads its value instead of editing it,
because the asset belongs to a module. `references` are the reference
fields the asset's type declares: each gets a picker row, whether or not
the document binds it yet, and the document key behind it is left out of
the walk so one field has one row. A root that is not an object draws as
one read-only row.
