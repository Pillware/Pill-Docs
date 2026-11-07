<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3816"></a>

# Constant `pill_editor_core::gizmo::RESOURCE_FIELDS`

```rust
pub const RESOURCE_FIELDS: &[ResourceField] = _;
```

Source: `editor\pill_editor_core\src\gizmo.rs:92`

Every editable field, in the order the Inspector lists them.

One table serves three readers: the write path ([`set_resource_field`](fn.set_resource_field.md#rustdoc-item-3814)),
the read path ([`resource_field_value`](fn.resource_field_value.md#rustdoc-item-3815)) and the Inspector's rows, through
[`crate::resources::EDITABLE_RESOURCES`](../resources/constant.EDITABLE_RESOURCES.md#rustdoc-item-2488). A field therefore cannot be
offered by the tab and refused by the write, or be readable and not
writable.

An enum field travels as its `U32` discriminant, in declaration order. A
step travels as an `F32`.
