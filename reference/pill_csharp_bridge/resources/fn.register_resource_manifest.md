<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1996"></a>

# Function `pill_csharp_bridge::resources::register_resource_manifest`

```rust
pub(crate) fn register_resource_manifest(engine: &mut pill_engine::Engine, resources: &[ManagedResourceDeclaration]) -> Result<(), pill_core::error::CSharpError>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\resources.rs:213`

Registers every resource the managed manifest declares.

It takes the entries a manifest parse separated out. The new table is
published once at the end, so one generation's whole set of bindings
becomes visible together.

Each resource is registered twice on purpose: once as a foreign resource, so
the scheduler and managed code can reach it, and once as persistable, so it
appears in a snapshot. A foreign resource has no Rust type to derive
persistence from, and its bytes are exactly what a snapshot can carry.

## Errors

Returns a [`CSharpError`] when a declared layout cannot describe an
allocation, when the name is already claimed by a Rust resource of a
different shape, or when a Rust value is already stored under the identity.
