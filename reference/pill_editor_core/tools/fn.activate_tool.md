<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11599"></a>

# Function `pill_editor_core::tools::activate_tool`

```rust
pub fn activate_tool(world: &mut pill_engine::World, tool: Option<&str>) -> Result<(), String>;
```

Source: `editor\pill_editor_core\src\tools.rs:1759`

Makes `tool` the active one, and puts the gizmo back on the space that tool
was last on.

Choosing a tool is not a space change on its own: a tool nobody switched
leaves the gizmo where it is, and a tool that was on a frame comes back on
it, so switching between two tools with their own frames keeps each one's
frame.

## Errors

Returns the registry's refusal when no tool has that name, and changes
nothing then.
