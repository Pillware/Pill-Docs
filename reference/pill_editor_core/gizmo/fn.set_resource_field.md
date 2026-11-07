<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3814"></a>

# Function `pill_editor_core::gizmo::set_resource_field`

```rust
pub fn set_resource_field(settings: &mut GizmoSettings, resource_name: &str, field_name: &str, field_value: &pill_engine::FieldValue) -> Result<pill_engine::FieldValue, String>;
```

Source: `editor\pill_editor_core\src\gizmo.rs:177`

Sets one field of the gizmo settings from a field value and returns the
previous value, for the command's inverse.

The engine cannot read or write a Rust resource's fields generically, so
[`RESOURCE_FIELDS`](constant.RESOURCE_FIELDS.md#rustdoc-item-3816) lists the ones that may be written. This function is a
lookup in that table, then the row's own write.

## Errors

Returns the message to show the user when `resource_name` is not
[`RESOURCE_NAME`](constant.RESOURCE_NAME.md#rustdoc-item-3775), when `field_name` is not in [`RESOURCE_FIELDS`](constant.RESOURCE_FIELDS.md#rustdoc-item-3816), or when
`field_value` has a kind the field cannot hold.
