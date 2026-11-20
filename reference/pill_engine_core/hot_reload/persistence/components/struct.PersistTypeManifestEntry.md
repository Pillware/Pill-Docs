<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5483"></a>

# Struct `pill_engine_core::hot_reload::persistence::components::PersistTypeManifestEntry`

```rust
pub struct PersistTypeManifestEntry;
```

Source: `engine\pill_engine_core\src\hot_reload\persistence\components.rs:49`

Lightweight manifest entry for the persistable component types registered
right now.

[`World::persist_type_manifest`](../../../ecs/world/struct.World.md#rustdoc-item-5482) builds one entry per registered type, so
the host can compare the registrations before and after a reload and decide
which types need migration.

## Fields

<a id="rustdoc-item-6827"></a>

### `type_name`

```rust
type_name: String
```

Name the type is registered under: a shared component's declared name,
otherwise the path of the Rust type.

<a id="rustdoc-item-6828"></a>

### `component_id`

```rust
component_id: crate::component::ComponentId
```

Runtime component identifier used by archetype columns.

<a id="rustdoc-item-6829"></a>

### `schema_hash`

```rust
schema_hash: u64
```

Schema hash the registration stored for this type name.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
