<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-681"></a>

# Function `pill_editor_shell::shell::inspector_fields::inspector_asset_row`

```rust
pub fn inspector_asset_row(ui: &mut egui::Ui, row_input: AssetRowInput<'_>, pending: &mut PendingEditorCommands, session: &mut InspectorSession, overlay_regions: &mut Vec<ShellRect>);
```

Source: `editor\pill_editor_shell\src\shell\inspector_fields.rs:542`

Draws one asset reference row.

The row is a button naming the referenced asset, which opens a picker of
every asset of the field's type, a clear button, and a drop target for a
file of the field's asset type dragged out of the Assets tab
([`asset_drop_fits`](fn.asset_drop_fits.md#rustdoc-item-680)).

Every choice becomes one recorded `SetFieldAsset` step for the whole
selection. An asset that is not loaded yet is loaded when the step is
applied.
