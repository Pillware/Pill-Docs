<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-795"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_settings::reference_list_rows`

```rust
pub fn reference_list_rows(ui: &mut egui::Ui, asset_path: &str, root: &JsonValue, references: &[AssetReferenceField], walk: &mut SettingsWalk<'_>);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_settings.rs:207`

Draw every list family a reference field set names - `passes[0]`,
`passes[1]`, ... - as one editable list: a draggable row per entry, and the
picker that appends the next one.

A chain's `passes` list is the only family with bracketed entries; a
texture family expands to dotted keys such as `textures.base_color` and
draws as plain rows. A drag reorders the list, and a drag or a remove
rewrites the whole array in one recorded step, so undo takes back that one
change and not the whole file.
