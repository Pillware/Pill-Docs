<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-976"></a>

# Function `pill_csharp_bridge::components::register_managed_storage`

```rust
pub(in components) fn register_managed_storage(engine: &mut pill_engine::Engine, stable_id: StableComponentId, component: &super::manifest::ManagedManifestEntry) -> Result<(pill_engine::ComponentId, Vec<pill_engine::component_registry::ComponentFieldDescriptor>), pill_core::error::CSharpError>;
```

Visibility: `{'restricted': {'parent': 781, 'path': '::components'}}` · Source: `csharp\pill_csharp_bridge\src\components.rs:1155`

The one registration sequence: startup and every reload action (add,
rename) go through it, so the component descriptor and the editor-facing
field layout cannot be installed by one path and skipped by another. The
installed layout is returned for the startup log line that reports it.

## Errors

Returns a [`CSharpError`] when the engine refuses the component descriptor
or its field layout.
