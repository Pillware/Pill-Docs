<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1318"></a>

# Function `pill_development_host::csharp::codegen::generate_module_components_csharp`

```rust
pub(crate) fn generate_module_components_csharp(workspace_root: &std::path::Path, module_name: &str, exposed: &[pill_csharp_bridge::ModuleExposedComponent], value_types: &[pill_engine::component_registry::PillValueTypeDescriptor], methods: &[pill_csharp_bridge::ResolvedMirrorMethod], accessors: &[pill_csharp_bridge::ResolvedFieldAccessor]) -> Result<bool, String>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\csharp\codegen.rs:205`

Generates `<module>_Components.g.cs` in the extension's `generated`
directory, covering the surface the module exposes to managed code: its
exposed components, its `#[derive(PillMirror)]` value types, the types its
type rows declare, and its `#[pill_mirror_fn]` free functions.

Returns `Ok(true)` when the mirror file was written or removed, and
`Ok(false)` when the file on disk already matched what this call would
generate. The caller uses the flag to rebuild the C# project only when what
C# can see has changed.

## Errors

Returns a message when an exposed component's derived name has no
namespace; a field layout cannot be expressed in C# (an alignment above 8,
a field outside the type, overlapping siblings, an array whose count does
not divide its size, an unsupported type tag); a container field has no
published accessor or trampoline; two mirrored types collide on one C#
name; a declared value type disagrees with the field using it; a declared
type or mirrored member cannot be emitted; or a file operation fails.
