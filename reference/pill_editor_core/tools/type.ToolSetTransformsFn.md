<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11003"></a>

# Type alias `pill_editor_core::tools::ToolSetTransformsFn`

```rust
pub type ToolSetTransformsFn = fn (entity: pill_engine::Entity, moves: &[ElementMove], world: &mut pill_engine::World);
```

Source: `editor\pill_editor_core\src\tools.rs:361`

Writes moved elements back into the tool's component.

The editor calls this with the world transforms a drag produced; the tool
maps them onto whatever it stores, so the frame maths, the snapping and the
undo step all stay the editor's.
