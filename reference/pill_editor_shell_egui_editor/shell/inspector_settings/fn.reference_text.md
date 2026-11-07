<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-813"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_settings::reference_text`

```rust
pub fn reference_text(field: &AssetReferenceField) -> String;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_settings.rs:942`

Returns the text a reference row shows for its field.

That is the label the executable resolved: a listing path, or the name the
store loaded the asset under when it has no file. When neither knows the
guid, only the guid's first eight characters are shown.
