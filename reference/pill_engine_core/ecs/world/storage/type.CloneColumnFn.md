<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4883"></a>

# Type alias `pill_engine_core::ecs::world::storage::CloneColumnFn`

```rust
pub(crate) type CloneColumnFn = fn (_: &crate::archetype::ComponentColumn, _: &mut crate::archetype::ComponentColumn) -> Result<(), ()>;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\ecs\world\storage.rs:124`

One type's row-cloning function: copies every row of the source column into
the destination column, clones included.

It is monomorphised in the DLL that registered the type, so it is only ever
called while that image is mapped. The engine re-registers it on every
reload with the other per-type functions.
