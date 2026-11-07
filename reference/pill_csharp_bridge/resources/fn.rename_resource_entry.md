<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2029"></a>

# Function `pill_csharp_bridge::resources::rename_resource_entry`

```rust
pub(in resources) fn rename_resource_entry(engine: &mut pill_engine::Engine, _identity: super::components::StableComponentId, predecessor: &super::manifest_apply::RenamePredecessor<'_, ResourceBinding>, resource: &ManagedResourceDeclaration) -> Result<(ResourceBinding, Option<ResourceUndo>), pill_core::error::CSharpError>;
```

Visibility: `{'restricted': {'parent': 1993, 'path': '::resources'}}` · Source: `csharp\pill_csharp_bridge\src\resources.rs:435`

Registers the successor of a renamed resource and moves the value across.

## Errors

Returns a [`CSharpError`] when the engine refuses the new registration, or
when it refuses to move the stored bytes onto it.
