<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2033"></a>

# Function `pill_csharp_bridge::resources::resource_field_plan`

```rust
pub(in resources) fn resource_field_plan(previous: &[ResourceFieldLayout], arriving: &[ResourceFieldLayout]) -> pill_engine::archetype::FieldPlan;
```

Visibility: `{'restricted': {'parent': 1993, 'path': '::resources'}}` · Source: `csharp\pill_csharp_bridge\src\resources.rs:621`

Builds the byte plan from one resource shape to another, and applies the
declared defaults to the fields the diff leaves empty.

A reshape and a rename share it, because they differ only in the id the plan
runs against. `set_default` does nothing on a copied field, which stops a
changed default from overwriting a carried value.

## Panics

Panics if the engine refuses a declared default for its planned field, which
the manifest validation makes impossible.
