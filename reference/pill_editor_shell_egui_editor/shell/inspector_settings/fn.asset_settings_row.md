<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-805"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_settings::asset_settings_row`

```rust
pub fn asset_settings_row(ui: &mut egui::Ui, asset_path: &str, root: &JsonValue, value: &JsonValue, key: String, walk: &mut SettingsWalk<'_>);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_settings.rs:653`

Draw one settings row: a leaf gets the widget its JSON kind asks for, and
its commit carries the whole patched document. A container becomes a
heading over its children one level in.

A colour parameter is the one exception: it is claimed before the container
shapes below it and drawn as a swatch. A texture slot never arrives here,
because the walk leaves every key a reference field owns to that field's
row.

What the rows below need travels in [`SettingsWalk`](struct.SettingsWalk.md#rustdoc-item-728), so the recursion
takes one shared value.
