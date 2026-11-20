<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4926"></a>

# Type alias `pill_engine_core::ecs::world::storage::ResourceCloneFn`

```rust
pub(crate) type ResourceCloneFn = fn (_: &crate::resource::ErasedResource) -> Option<crate::resource::ErasedResource>;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\ecs\world\storage.rs:320`

One resource type's cloning function: copies the live value into a new
erased resource, or answers `None` when the value is not that type.

Like [`CloneColumnFn`](type.CloneColumnFn.md#rustdoc-item-4883), it is monomorphised in the DLL that inserted the
value, so it is called only while that image is mapped.
