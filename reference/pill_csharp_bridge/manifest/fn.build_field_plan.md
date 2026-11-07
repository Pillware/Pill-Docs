<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-986"></a>

# Function `pill_csharp_bridge::manifest::build_field_plan`

```rust
pub(crate) fn build_field_plan(engine: &pill_engine::Engine, component_id: pill_engine::ComponentId, fields: &[ManagedFieldManifest]) -> pill_engine::archetype::FieldPlan;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:1014`

Build the byte plan from the field layout a component has now to the one a
manifest asks for.

The earlier side comes from the world, not from the previous manifest: the
layout registered with a descriptor component is the layout its columns
actually use, and that is the only thing a byte copy can be measured
against.

## Panics

Panics when a declared default does not parse or does not fit its field.
[`parse_and_validate_manifest`](fn.parse_and_validate_manifest.md#rustdoc-item-1504) refuses both, so a manifest that came
through it cannot panic here.
