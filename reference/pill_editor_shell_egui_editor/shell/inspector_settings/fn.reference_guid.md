<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-809"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_settings::reference_guid`

```rust
pub fn reference_guid(value: &JsonValue) -> Option<String>;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_settings.rs:909`

Returns the guid a settings reference holds, in either spelling.

That is the value itself when the document writes a bare guid, or the
`guid` field of the object form.
