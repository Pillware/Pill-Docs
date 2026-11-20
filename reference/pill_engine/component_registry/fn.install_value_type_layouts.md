<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-320"></a>

# Function `pill_engine::component_registry::install_value_type_layouts`

```rust
pub(in component_registry) fn install_value_type_layouts(world: &mut crate::World) -> PreviousLayoutResolvers;
```

Visibility: `{'restricted': {'parent': 322, 'path': '::component_registry'}}` · Source: `engine\pill_engine\src\component_registry.rs:423`

Install this artifact's value types as the world's field-layout resolver,
returning the resolver that was installed before.

Private on purpose: the raw pair lets a caller forget the restore, which
leaves the world holding a function pointer into an image the host may have
unmapped. [`ValueTypeLayoutScope`](struct.ValueTypeLayoutScope.md#rustdoc-item-318) owns both halves, and
[`run_artifact_entry`](fn.run_artifact_entry.md#rustdoc-item-319) is the only code that needs them.
