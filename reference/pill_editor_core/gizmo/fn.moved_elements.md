<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4699"></a>

# Function `pill_editor_core::gizmo::moved_elements`

```rust
pub fn moved_elements(kind: HandleKind, origin: [f32; 3], basis: [[f32; 3]; 3], reference: f32, elements: &[(u64, crate::tools::ElementTransform)], value: DragValue) -> Vec<crate::tools::ElementMove>;
```

Source: `editor\pill_editor_core\src\gizmo.rs:1155`

The world transform each of `elements` takes when one drag move is applied.

`origin` is the selection's pivot, so a turn and a scale both happen around
it; `basis` is the frame the gizmo is drawn in, so a drag in a turned frame
produces the world displacement that frame implies. `reference` is the
handle length in world units, which a scale drag's distance is measured
against - the same measure the entity drag uses.

A scale never turns negative: the factor stops at the smallest value that
keeps a positive scale, so elements cannot cross the pivot into a mirror.
