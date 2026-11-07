<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2042"></a>

# Function `pill_csharp_bridge::resources::resolve_resource_access`

```rust
pub(crate) fn resolve_resource_access(stable_id_low: u64, stable_id_high: u64) -> Result<pill_engine::ResourceId, pill_core::error::CSharpError>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\resources.rs:929`

Turns one reflected resource access into scheduler metadata.

Returns the engine id the access refers to, so the caller can add it to a
[`SystemAccess`](pill_engine::SystemAccess) as a read or a write.

## Errors

Returns [`CSharpError::UnregisteredResource`] when the key names no
registered resource. That means a system declared `Res<T>` for a type the
manifest never carried, which is almost always a missing `[EcsResource]`.
