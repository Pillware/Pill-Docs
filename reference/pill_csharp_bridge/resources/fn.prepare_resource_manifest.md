<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1998"></a>

# Function `pill_csharp_bridge::resources::prepare_resource_manifest`

```rust
pub(crate) fn prepare_resource_manifest<'declaration>(engine: &pill_engine::Engine, resources: &'declaration [ManagedResourceDeclaration]) -> Result<super::manifest_apply::PreparedManifest<'declaration, ManagedResourceDeclaration, ResourceBinding>, pill_core::error::CSharpError>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\resources.rs:265`

Resolves this manifest's resource entries without touching the engine.

A caller that has both kinds at hand resolves resources *and* components
through this, before either one mutates anything: a refusal about one kind's
shape must not leave the other kind's relayout already applied.

## Errors

Returns a [`CSharpError`] when one entry has more than one alias that
resolves to a live registration, and when an entry the table already holds
also declares an alias. Both checks run during resolution, so both fail
before anything is mutated.
