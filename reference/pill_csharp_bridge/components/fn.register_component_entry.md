<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-977"></a>

# Function `pill_csharp_bridge::components::register_component_entry`

```rust
pub(in components) fn register_component_entry(engine: &mut pill_engine::Engine, stable_id: StableComponentId, component: &super::manifest::ManagedManifestEntry) -> Result<(ComponentBinding, Option<ComponentUndo>), pill_core::error::CSharpError>;
```

Visibility: `{'restricted': {'parent': 781, 'path': '::components'}}` · Source: `csharp\pill_csharp_bridge\src\components.rs:792`

Register one manifest entry the binding table has no entry for.

This is the startup path in one function: anything that reaches here is
managed storage with its editor-facing field layout, because a shared entry
with no native binding was already refused.

## Errors

Returns a [`CSharpError`] when the engine refuses to register the column,
which [`register_managed_storage`](fn.register_managed_storage.md#rustdoc-item-976) reports.
