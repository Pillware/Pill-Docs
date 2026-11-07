<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3665"></a>

# Function `pill_editor_core::editor_state::registered_components`

```rust
pub fn registered_components(world: &pill_engine::World) -> Vec<RegisteredComponent>;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:1174`

Returns the registered component types for the add picker, one entry per
type name.

The registry keeps one entry per reload generation of a type name, which is
expected. A type is offered once and counts as addable when any of its
generations carries a field layout.
