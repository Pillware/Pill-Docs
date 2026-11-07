<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-685"></a>

# Function `pill_csharp_bridge::backend::derive_system_access`

```rust
pub(crate) fn derive_system_access(accesses: &[super::abi::NativeSystemAccess], bindings: &std::collections::HashMap<StableComponentId, ComponentBinding>) -> Result<pill_engine::SystemAccess, pill_core::error::CSharpError>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\backend.rs:1541`

Turns declared access modes into the scheduler's metadata.

## Errors

Returns [`CSharpError::UnregisteredComponent`] when an access names a
component nobody registered, [`CSharpError::UnregisteredResource`] when it
names an unregistered managed resource, and
[`CSharpError::UnknownAccessMode`] when its mode is neither read nor write.
