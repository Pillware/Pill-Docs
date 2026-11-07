<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2028"></a>

# Constant `pill_csharp_bridge::resources::RESOURCE_SUBJECT`

```rust
pub(crate) const RESOURCE_SUBJECT: super::manifest_apply::ManifestSubject<ManagedResourceDeclaration, ResourceBinding, ResourceUndo> = _;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\resources.rs:350`

The actions the shared apply pipeline needs for managed resources.

A resource owns no column and no archetype, so its "reshape" migrates one
stored value where a component's rewrites a column. The subject exists to
carry exactly this kind of difference.
