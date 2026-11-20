<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4930"></a>

# Struct `pill_engine_core::ecs::world::storage::ResourceCopy`

```rust
pub(crate) struct ResourceCopy;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\ecs\world\storage.rs:328`

The copies of the game-state resources, taken at Play and put back at Stop.

Only [`PlayState::Restore`] resources are here. A `Keep` or `Rebuild`
resource is absent by design, so Stop leaves its live value alone.

## Fields

<a id="rustdoc-item-4927"></a>

### `values`

```rust
values: std::collections::HashMap<crate::resource::ResourceId, crate::resource::ErasedResource>
```

The copied value of each restored resource, keyed by its id.

<a id="rustdoc-item-4928"></a>

### `persisted_values`

```rust
persisted_values: std::collections::HashMap<crate::resource::ResourceId, Vec<u8>>
```

The persisted JSON of each restored resource the engine could not copy
as a value, keyed by its id.

A resource that is neither `Clone` nor a foreign payload but declares
persistence - a settings document, a save file's shape - is copied by
its own byte form. Stop restores it through the same deserializer a
snapshot load uses, so the value that comes back is the type's own.

<a id="rustdoc-item-4929"></a>

### `dropped_by_reload`

```rust
dropped_by_reload: Vec<(crate::resource::ResourceId, String)>
```

The types whose copy a reload dropped because it dropped the live value
too, keyed by their id, so Stop can name them and leaves their live
value alone.

A copy is a value of a module's type, so the reload releases it while
the image is still mapped. There is nothing left to put back, and the
value the game holds under that id is the one the person sees; Stop
warns rather than silently keeping it.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Default`
