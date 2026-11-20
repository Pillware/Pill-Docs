<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-895"></a>

# Function `pill_editor_shell::shell::inspector_settings::reference_row`

```rust
pub fn reference_row(ui: &mut egui::Ui, asset_path: &str, root: &JsonValue, field: &AssetReferenceField, walk: &mut SettingsWalk<'_>);
```

Source: `editor\pill_editor_shell\src\shell\inspector_settings.rs:971`

Draw one reference field: the referenced asset's path (or its guid, when
the listing no longer holds it), a clear button, a drop target and a picker
over the rows of the type the field accepts.

Every choice writes the chosen asset's guid in the shape the document
already uses: the object form for a nested reference, the bare string for a
texture slot. A field the document does not hold yet writes the object
form. The same row serves a material's shader and its declared slots,
because what differs between them is data. A list entry draws through
[`reference_list_entry_row`](fn.reference_list_entry_row.md#rustdoc-item-878), which keeps this row's picker.
