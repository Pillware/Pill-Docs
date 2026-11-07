<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1551"></a>

# Function `pill_editor::runner::draw_gizmo_guides`

```rust
pub(in runner) fn draw_gizmo_guides(debug: &mut pill_engine_core::debug_draw::DebugDraw, kind: pill_editor_core::gizmo::HandleKind, basis: [[f32; 3]; 3], start_pivot: [f32; 3], current_pivot: [f32; 3], reference: f32);
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:4002`

Draw the drag guides: the axis constraint line through a single-axis
handle's axis and, for a translation drag, the dotted line from the press's
pivot to the current one.

They are plain debug lines, not gizmo geometry, so they carry no handle id:
a pick never names them and they cannot be grabbed. They are marked as the
editor's chrome, which keeps them off a game surface, where the viewport
shows the project's frame rather than the editor's drag. The axis guide uses
the handle's own colour; the displacement line stays neutral so it never
reads as a fourth axis.
