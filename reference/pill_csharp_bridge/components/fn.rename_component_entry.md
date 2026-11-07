<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-979"></a>

# Function `pill_csharp_bridge::components::rename_component_entry`

```rust
pub(in components) fn rename_component_entry(engine: &mut pill_engine::Engine, stable_id: StableComponentId, predecessor: &super::manifest_apply::RenamePredecessor<'_, ComponentBinding>, component: &super::manifest::ManagedManifestEntry) -> Result<(ComponentBinding, Option<ComponentUndo>), pill_core::error::CSharpError>;
```

Visibility: `{'restricted': {'parent': 781, 'path': '::components'}}` · Source: `csharp\pill_csharp_bridge\src\components.rs:916`

Register the successor of a renamed component and move the rows across.

## Errors

Returns a [`CSharpError`] when the successor cannot be registered, or when
the engine refuses to move the predecessor's rows onto it.
