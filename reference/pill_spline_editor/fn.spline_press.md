<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-117"></a>

# Function `pill_spline_editor::spline_press`

```rust
pub(crate) fn spline_press(_entity: pill_engine::Entity, _element: u64, _click: pill_editor_core::editor_state::SelectionClick, _selected: &[u64], _world: &pill_engine::World) -> pill_editor_core::tools::PressResponse;
```

Visibility: `crate` · Source: `extensions\pill_spline\modules\editor\src\pill_spline_editor.rs:349`

Answers a press on one of the tool's elements.

The editor's own rule is what a spline wants: a press selects and starts a
drag, and a Ctrl press extends the selection. Only a press on a tangent of a
point that is not selected is taken over, because dragging a tangent is how
a reader bends the curve.
