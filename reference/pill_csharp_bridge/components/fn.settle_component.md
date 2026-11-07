<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-974"></a>

# Function `pill_csharp_bridge::components::settle_component`

```rust
pub(in components) fn settle_component(_engine: &pill_engine::Engine, binding: &ComponentBinding, component: &super::manifest::ManagedManifestEntry) -> Result<super::manifest_apply::Settlement, pill_core::error::CSharpError>;
```

Visibility: `{'restricted': {'parent': 781, 'path': '::components'}}` · Source: `csharp\pill_csharp_bridge\src\components.rs:756`

Decide what an arriving entry means for the binding already registered.

A native or module-native binding is never migrated: the Rust side did not
change, so a mirror that disagrees is simply wrong and is refused by the
same check startup applies.

## Errors

Returns the error of [`check_binding_against_manifest`](fn.check_binding_against_manifest.md#rustdoc-item-894) when the arriving
entry claims a native or module-native binding and does not match it.
