<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-378"></a>

# Function `pill_editor_shell::shell::spline_tool::point_write`

```rust
pub fn point_write(entity: Entity, field_name: &str, coordinate: f32) -> PanelCommand;
```

Source: `editor\pill_editor_shell\src\shell\spline_tool.rs:204`

Builds the write one control-point row queues when its drag value changes.

`field_name` is the row's name (`control_points[0].x`), so the write is an
ordinary recorded scalar edit - the same one an Inspector row queues.
