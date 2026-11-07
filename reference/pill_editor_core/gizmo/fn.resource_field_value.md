<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3815"></a>

# Function `pill_editor_core::gizmo::resource_field_value`

```rust
pub fn resource_field_value(settings: &GizmoSettings, resource_name: &str, field_name: &str) -> Result<pill_engine::FieldValue, String>;
```

Source: `editor\pill_editor_core\src\gizmo.rs:201`

Reads one editable field of the gizmo settings: the reading half of the
table [`set_resource_field`](fn.set_resource_field.md#rustdoc-item-3814) writes through.

## Errors

Returns the message to show the user when `resource_name` is not
[`RESOURCE_NAME`](constant.RESOURCE_NAME.md#rustdoc-item-3775) or when `field_name` is not in [`RESOURCE_FIELDS`](constant.RESOURCE_FIELDS.md#rustdoc-item-3816).
