<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-717"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_widgets::component_rows`

```rust
pub fn component_rows(detail: &EntityDetail) -> Vec<(String, Vec<(String, String)>)>;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_widgets.rs:361`

Returns the Inspector's rows for `detail`: one (type name, field rows) pair
per component, and each field row a (name, formatted value) pair.
