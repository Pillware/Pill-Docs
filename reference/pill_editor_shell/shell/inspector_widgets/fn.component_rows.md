<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-797"></a>

# Function `pill_editor_shell::shell::inspector_widgets::component_rows`

```rust
pub fn component_rows(detail: &EntityDetail) -> Vec<(String, Vec<(String, String)>)>;
```

Source: `editor\pill_editor_shell\src\shell\inspector_widgets.rs:471`

Returns the Inspector's rows for `detail`: one (type name, field rows) pair
per component, and each field row a (name, formatted value) pair.
