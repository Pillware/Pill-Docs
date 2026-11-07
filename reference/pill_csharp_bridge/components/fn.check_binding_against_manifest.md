<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-894"></a>

# Function `pill_csharp_bridge::components::check_binding_against_manifest`

```rust
pub(crate) fn check_binding_against_manifest(binding: ComponentBinding, component: &super::manifest::ManagedManifestEntry) -> Result<(), pill_core::error::CSharpError>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\components.rs:469`

Check one manifest entry against the binding the host already holds.

Both paths use it, so they cannot disagree about what "the same component"
means. If a reload accepted a difference that startup refused, the
registered id would mean something else after the reload.

## Errors

Returns a [`CSharpError`] when the entry's size or alignment differs from
the binding's. It also returns one when the schemas differ: a managed
binding must agree on its schema hash, and a module-native binding, when it
carries a field signature, must agree on its list of public fields.
