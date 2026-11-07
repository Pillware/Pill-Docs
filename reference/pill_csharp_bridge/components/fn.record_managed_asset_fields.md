<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-982"></a>

# Function `pill_csharp_bridge::components::record_managed_asset_fields`

```rust
pub(in components) fn record_managed_asset_fields(engine: &mut pill_engine::Engine, component_id: pill_engine::ComponentId, component: &super::manifest::ManagedManifestEntry);
```

Visibility: `{'restricted': {'parent': 781, 'path': '::components'}}` · Source: `csharp\pill_csharp_bridge\src\components.rs:1127`

Record which asset type each `Handle<T>` field of a managed component
references, as the derive does for a Rust component.

The manifest names `T` by its Rust type path, which is what its C# mirror
carries. The world records the name that type is registered under, looked up
through the asset manager, so a Rust field and a C# field that reference the
same asset type agree. A path that no Rust type registered is recorded as
written.
