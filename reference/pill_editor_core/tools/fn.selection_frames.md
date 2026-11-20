<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11597"></a>

# Function `pill_editor_core::tools::selection_frames`

```rust
pub fn selection_frames(world: &pill_engine::World) -> Vec<CoordinateFrame>;
```

Source: `editor\pill_editor_core\src\tools.rs:1706`

The frames the active tool offers for what the gizmo draws on: the element
selection's own entity, or the primary entity when no element is selected.

Every reader of a tool's frames resolves them here, so the space row, the
snapshot and the per-tool memory all name one frame per index.
