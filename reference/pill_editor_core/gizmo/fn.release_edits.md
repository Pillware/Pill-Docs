<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4194"></a>

# Function `pill_editor_core::gizmo::release_edits`

```rust
pub fn release_edits(pressed_values: &[f32], released_values: &[f32]) -> Option<Vec<(usize, f32)>>;
```

Source: `editor\pill_editor_core\src\gizmo.rs:1296`

Returns the edits a released drag records, as `(index, value)` pairs in
array order.

`pressed_values` is the field's value at the press and `released_values` is
the value the drag wrote. `None` when the two are equal, because a click
that moved nothing is not an undo step.

Any length works, so the transform's arrays are covered too: `translation`
and `scale` hold 3 values and `rotation` holds 4.
