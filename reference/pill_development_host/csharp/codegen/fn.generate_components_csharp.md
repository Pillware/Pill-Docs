<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1323"></a>

# Function `pill_development_host::csharp::codegen::generate_components_csharp`

```rust
pub(crate) fn generate_components_csharp(crate_root: &std::path::Path, module_name: &str, exposed: &[pill_csharp_bridge::ModuleExposedComponent], value_types: &[pill_engine::component_registry::PillValueTypeDescriptor], methods: &[pill_csharp_bridge::ResolvedMirrorMethod], accessors: &[pill_csharp_bridge::ResolvedFieldAccessor]) -> Result<bool, String>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\csharp\codegen.rs:231`

Writes `generated/<module_name>_Components.g.cs` inside `crate_root`.

This is the implementation behind [`generate_module_components_csharp`](fn.generate_module_components_csharp.md#rustdoc-item-1318). It
takes the directory that holds the module's `generated/` folder directly.

## Errors

Returns the same errors as [`generate_module_components_csharp`](fn.generate_module_components_csharp.md#rustdoc-item-1318).
