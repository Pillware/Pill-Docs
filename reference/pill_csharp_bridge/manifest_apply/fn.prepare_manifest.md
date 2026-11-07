<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1696"></a>

# Function `pill_csharp_bridge::manifest_apply::prepare_manifest`

```rust
pub(crate) fn prepare_manifest<'declaration, Declaration, Binding, Undo>(subject: &ManifestSubject<Declaration, Binding, Undo>, engine: &pill_engine::Engine, previous: std::collections::HashMap<super::components::StableComponentId, Binding>, declarations: &'declaration [Declaration]) -> Result<PreparedManifest<'declaration, Declaration, Binding>, pill_core::error::CSharpError> where Binding: Clone;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest_apply.rs:244`

The half of the pipeline that decides what a manifest means, without
changing anything.

It raises every refusal the pipeline can make about the manifest's own
shape. It is split from [`execute_manifest`](fn.execute_manifest.md#rustdoc-item-1721) so one caller can resolve two
kinds before executing either. Resources and components arrive in one
manifest, and a shape refusal in one kind must not leave the other kind's
relayout already applied. Nothing here changes the engine or the table.

## Errors

Returns a [`CSharpError`] when an alias names more than one live
registration, when one declaration's aliases reach more than one
predecessor, when a declaration the table has no entry for cannot be
registered as it stands, when an entry the table already holds also declares
an alias, or when the subject refuses the arriving shape against the live
binding.
