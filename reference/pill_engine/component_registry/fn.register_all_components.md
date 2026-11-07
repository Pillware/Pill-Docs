<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-308"></a>

# Function `pill_engine::component_registry::register_all_components`

```rust
pub fn register_all_components(world: &mut crate::World) -> Result<(), crate::error::WorldError>;
```

Source: `engine\pill_engine\src\component_registry.rs:372`

Register every component this artifact declares with the derive.

Called by the macro-generated `init` entry point before the user's own
registration code runs, so entity seeding and system registration can rely
on every component type already being known to the world.

While the loop runs, this artifact's value types are installed as the
world's [`ValueTypeLayoutResolver`], so a component field of a
`#[derive(PillMirror)]` type expands into editable rows. The previous
resolver is restored afterwards, so none is left pointing into this DLL.

## Errors

Returns the first error a registration recorded during the loop - the
component-type ceiling, a name collision, or a layout disagreement with an
already registered type - so the generated `init` can fail the reload
transactionally instead of running with a half-registered component set.
