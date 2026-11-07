<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2032"></a>

# Function `pill_csharp_bridge::resources::register_declared_resource`

```rust
pub(in resources) fn register_declared_resource(engine: &mut pill_engine::Engine, resource: &ManagedResourceDeclaration) -> Result<pill_engine::ResourceId, pill_core::error::CSharpError>;
```

Visibility: `{'restricted': {'parent': 1993, 'path': '::resources'}}` · Source: `csharp\pill_csharp_bridge\src\resources.rs:555`

Registers one declared resource and opts it into snapshots.

A field layout the engine refuses is only logged, because the resource is
registered and usable by then.

## Errors

Returns a [`CSharpError`] when the engine refuses the registration, or when
it refuses to store the zero seed.
