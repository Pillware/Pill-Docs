<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3500"></a>

# Type alias `pill_engine_core::component_registry::ValueTypeLayoutResolver`

```rust
pub type ValueTypeLayoutResolver = fn (_: &str) -> Option<&'static [ComponentFieldDescriptor]>;
```

Source: `engine\pill_engine_core\src\component_registry.rs:167`

A function that finds the field layout of a `#[derive(PillMirror)]` value
type. It takes the path a `struct:<path>` field tag names and tries an
exact type name first, then a unique suffix match.

The value types live in a per-DLL registry, which this crate cannot read.
The facade's `register_all_components` lends its own DLL's resolver to the
world for the length of its registration loop
([`World::replace_value_type_layout_resolver`]), so a component's nested
value-type fields expand against the value types its own DLL declares.

[`World::replace_value_type_layout_resolver`]: crate::World::replace_value_type_layout_resolver
