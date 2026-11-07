<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1415"></a>

# Function `pill_editor::runner::resolve_component_name`

```rust
pub(in runner) fn resolve_component_name(world: &pill_engine_core::World, name: &str) -> Option<String>;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:3725`

Resolve a component type name that may be abbreviated to its `::Name`
suffix; an ambiguous abbreviation resolves to nothing.
