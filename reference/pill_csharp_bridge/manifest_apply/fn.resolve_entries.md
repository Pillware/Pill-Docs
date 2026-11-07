<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1723"></a>

# Function `pill_csharp_bridge::manifest_apply::resolve_entries`

```rust
pub(in manifest_apply) fn resolve_entries<'declaration, Declaration, Binding, Undo>(subject: &ManifestSubject<Declaration, Binding, Undo>, engine: &pill_engine::Engine, previous: &std::collections::HashMap<super::components::StableComponentId, Binding>, declarations: &'declaration [Declaration], renames: &std::collections::HashMap<super::components::StableComponentId, (super::components::StableComponentId, String)>) -> Result<Vec<(super::components::StableComponentId, Resolution<'declaration, Declaration>)>, pill_core::error::CSharpError>;
```

Visibility: `{'restricted': {'parent': 970, 'path': '::manifest_apply'}}` · Source: `csharp\pill_csharp_bridge\src\manifest_apply.rs:420`

Resolve every declaration against the live table, refusing before anything is
applied.

## Errors

Returns a [`CSharpError`] when a declaration cannot be registered as it
stands, when a rename's successor name is already bound, or when the
subject refuses the arriving shape against the live one.
