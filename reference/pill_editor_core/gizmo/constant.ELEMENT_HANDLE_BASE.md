<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4407"></a>

# Constant `pill_editor_core::gizmo::ELEMENT_HANDLE_BASE`

```rust
pub const ELEMENT_HANDLE_BASE: u32 = 1000;
```

Source: `editor\pill_editor_core\src\gizmo.rs:516`

The first handle id an element handle may occupy.

The transform gizmo owns `1..=23`, and a pick answers with only the id it
was drawn with, so the element band starts well above them: no element can
ever be read as a gizmo handle, and no gizmo handle as an element.
