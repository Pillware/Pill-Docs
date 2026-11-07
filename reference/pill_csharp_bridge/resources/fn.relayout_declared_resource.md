<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2034"></a>

# Function `pill_csharp_bridge::resources::relayout_declared_resource`

```rust
pub(in resources) fn relayout_declared_resource(engine: &mut pill_engine::Engine, existing: &ResourceBinding, arriving: &ManagedResourceDeclaration) -> Result<(), pill_core::error::CSharpError>;
```

Visibility: `{'restricted': {'parent': 1993, 'path': '::resources'}}` · Source: `csharp\pill_csharp_bridge\src\resources.rs:668`

## Errors

Returns a [`CSharpError`] when the engine refuses the new layout or the byte
migration.
