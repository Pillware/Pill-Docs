<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-133"></a>

# Function `pill_physics_editor::collider_kinds`

```rust
pub(crate) fn collider_kinds(out: &mut Vec<pill_editor_core::tools::ElementKind>);
```

Visibility: `crate` · Source: `extensions\pill_physics\modules\editor\src\pill_physics_editor.rs:166`

The three handle families the tool exposes.

All three are reported whatever the shape is; which of them the selection
actually has is what [`collider_elements`](fn.collider_elements.md#rustdoc-item-132) decides.
