<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-893"></a>

# Function `pill_editor_shell::shell::inspector_settings::reference_text`

```rust
pub fn reference_text(field: &AssetReferenceField) -> String;
```

Source: `editor\pill_editor_shell\src\shell\inspector_settings.rs:940`

Returns the text a reference row shows for its field.

That is the label the executable resolved: a listing path, or the name the
store loaded the asset under when it has no file. When neither knows the
guid, only the guid's first eight characters are shown.
