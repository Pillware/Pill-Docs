<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-978"></a>

# Function `pill_csharp_bridge::components::reshape_component_entry`

```rust
pub(in components) fn reshape_component_entry(engine: &mut pill_engine::Engine, _stable_id: StableComponentId, existing: &ComponentBinding, component: &super::manifest::ManagedManifestEntry) -> Result<(ComponentBinding, Option<ComponentUndo>), pill_core::error::CSharpError>;
```

Visibility: `{'restricted': {'parent': 781, 'path': '::components'}}` · Source: `csharp\pill_csharp_bridge\src\components.rs:834`

Migrate one managed component's rows into the arriving layout.

## Errors

Returns a [`CSharpError`] when the engine refuses the row migration or the
new field layout.
