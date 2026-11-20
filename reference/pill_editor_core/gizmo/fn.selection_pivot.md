<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4701"></a>

# Function `pill_editor_core::gizmo::selection_pivot`

```rust
pub fn selection_pivot(translations: &[[f32; 3]]) -> Option<[f32; 3]>;
```

Source: `editor\pill_editor_core\src\gizmo.rs:1260`

The point the gizmo sits on for a set of elements: the average of their
world translations, or `None` when the set is empty.
