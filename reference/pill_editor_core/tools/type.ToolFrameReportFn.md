<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11004"></a>

# Type alias `pill_editor_core::tools::ToolFrameReportFn`

```rust
pub type ToolFrameReportFn = fn (entity: pill_engine::Entity, selected: &[u64], world: &pill_engine::World, out: &mut Vec<CoordinateFrame>);
```

Source: `editor\pill_editor_core\src\tools.rs:367`

Fills `out` with the frames the tool offers for the selection.

`selected` holds the ids the element selection is on, in selection order,
which is what a frame computed at the pivot needs.
