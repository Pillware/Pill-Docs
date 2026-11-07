<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-987"></a>

# Function `pill_csharp_bridge::components::rollback_field_plan`

```rust
pub(in components) fn rollback_field_plan(engine: &pill_engine::Engine, component_id: pill_engine::ComponentId, previous_fields: &[pill_engine::component_registry::ComponentFieldDescriptor]) -> pill_engine::archetype::FieldPlan;
```

Visibility: `{'restricted': {'parent': 781, 'path': '::components'}}` · Source: `csharp\pill_csharp_bridge\src\components.rs:1220`

Build the plan that puts a component back to a recorded field layout.

The inverse of [`super::manifest::build_field_plan`](../manifest/fn.build_field_plan.md#rustdoc-item-986) for the rollback path:
the engine's current layout is the source, and the descriptors captured
before the migration are the destination.
