<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3425"></a>

# Function `pill_development_host::project_module::loaded::reload_native`

```rust
pub(in project_module::loaded) fn reload_native(current: &mut crate::native_library::NativeLibrary, old_libraries: &mut Vec<crate::native_library::NativeLibrary>, registered_type_names: &mut Vec<String>, registered_schemas: &mut Vec<(String, u64)>, registered_resource_ids: &mut Vec<pill_engine::ResourceId>, registered_component_names: &mut Vec<String>, peer_component_names: &[String], engine: &mut pill_engine::Engine, engine_api: &pill_engine::EngineApi, workspace_root: &std::path::Path, config: &crate::ProjectModuleConfig, cancel_flag: Option<(&std::sync::atomic::AtomicU64, u64)>) -> bool;
```

Visibility: `{'restricted': {'parent': 3421, 'path': '::project_module::loaded'}}` · Source: `hosting\pill_development_host\src\project_module.rs:599`

Reload one native generation and migrate components whose persisted schema
changed across the module boundary.
