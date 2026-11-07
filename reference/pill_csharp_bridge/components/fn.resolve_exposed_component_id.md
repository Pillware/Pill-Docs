<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-888"></a>

# Function `pill_csharp_bridge::components::resolve_exposed_component_id`

```rust
pub(crate) fn resolve_exposed_component_id(world: &pill_engine::World, type_name: &str) -> Option<pill_engine::ComponentId>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\components.rs:296`

Resolve one exposed component name to its engine [`ComponentId`], reporting
an ambiguous name instead of binding managed code to a guessed column.

A name that resolves to nothing is an ordinary outcome, because the module
that registered it may be unloaded, so it yields `None` quietly. A name
claimed by two registrations is not ordinary: managed code would be bound to
one of the two columns, chosen arbitrarily, and every read and write through
that binding would silently address the wrong rows. That case is logged and
left unbound.
