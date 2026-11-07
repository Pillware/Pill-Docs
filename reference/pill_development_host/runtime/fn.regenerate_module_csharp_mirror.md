<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4200"></a>

# Function `pill_development_host::runtime::regenerate_module_csharp_mirror`

```rust
pub(in runtime) fn regenerate_module_csharp_mirror(workspace_root: &std::path::Path, slot: &slot::ExtensionSlot, exposed_components: Vec<pill_csharp_bridge::ModuleExposedComponent>) -> Result<(Vec<pill_csharp_bridge::ModuleExposedComponent>, Vec<pill_csharp_bridge::ResolvedMirrorMethod>, Vec<pill_csharp_bridge::ResolvedFieldAccessor>, bool), pill_core::error::CSharpError>;
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:2576`

Rewrite one extension's `generated/<module>_Components.g.cs` mirror file
from the generation loaded right now.

Returns what it was built from: the exposed component bindings for the C#
backend, the resolved mirror methods, and the heap-field accessors the
managed method table uses. It also reports whether the file on disk
changed; the reload path uses that to queue a C# project rebuild only when
what C# can see has moved.

## Errors

Returns a [`CSharpError::CodegenFailed`] when the mirror file cannot be
written.
