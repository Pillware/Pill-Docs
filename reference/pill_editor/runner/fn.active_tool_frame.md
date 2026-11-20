<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1873"></a>

# Function `pill_editor::runner::active_tool_frame`

```rust
pub(in runner) fn active_tool_frame(world: &pill_engine_core::World, entity: pill_engine_core::Entity, tool_frame: Option<u8>) -> Option<tools::CoordinateFrame>;
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:4360`

The tool frame the gizmo is in, when the active tool still offers it.

The frames belong to the current selection, so a frame index is resolved
against the report rather than remembered here; a selection the tool no
longer answers for leaves no frame, and the settings' own space applies.
