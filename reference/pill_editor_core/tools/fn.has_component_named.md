<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11428"></a>

# Function `pill_editor_core::tools::has_component_named`

```rust
pub fn has_component_named(world: &pill_engine::World, entity: pill_engine::Entity, required: &str) -> bool;
```

Source: `editor\pill_editor_core\src\tools.rs:932`

Whether `entity` carries a component named `required`.

The name is matched in full or by its `::` suffix, which is the one rule
every declaration that names a component follows: a crate names its own
component without spelling the module path, and a name that matches nothing
is simply absent.
