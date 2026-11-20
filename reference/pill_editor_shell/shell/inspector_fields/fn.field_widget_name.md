<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-697"></a>

# Function `pill_editor_shell::shell::inspector_fields::field_widget_name`

```rust
pub fn field_widget_name(widget: &inspector::FieldWidget) -> &'static str;
```

Source: `editor\pill_editor_shell\src\shell\inspector_fields.rs:1165`

Returns the name a row's widget logs under, so a suite can assert which
widget the model chose without reading pixels.
