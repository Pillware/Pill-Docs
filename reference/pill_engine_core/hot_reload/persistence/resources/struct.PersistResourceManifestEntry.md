<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5504"></a>

# Struct `pill_engine_core::hot_reload::persistence::resources::PersistResourceManifestEntry`

```rust
pub struct PersistResourceManifestEntry;
```

Source: `engine\pill_engine_core\src\hot_reload\persistence\resources.rs:83`

One persistable resource registration, as the reload transaction sees it.

Captured before the swap by [`World::persist_resource_manifest`](../../../ecs/world/struct.World.md#rustdoc-item-5503) so the pass
afterwards can compare schema hashes and read a reshaped value through the
serializer that wrote it. The component side splits the same information
across [`PersistTypeMetadata`](../components/struct.PersistTypeMetadata.md#rustdoc-item-5459), which keeps the retiring serializer, and
[`PersistTypeManifestEntry`](../components/struct.PersistTypeManifestEntry.md#rustdoc-item-5483), which keeps the name and the id.

## Fields

<a id="rustdoc-item-6965"></a>

### `resource_id`

```rust
resource_id: crate::resource::ResourceId
```

The id this resource was registered under when the entry was captured.

<a id="rustdoc-item-6966"></a>

### `type_name`

```rust
type_name: String
```

The name the resource is recorded under; a snapshot and a reload match
on it.

<a id="rustdoc-item-6967"></a>

### `schema_hash`

```rust
schema_hash: u64
```

Structural hash of the shape this generation declared.

<a id="rustdoc-item-6968"></a>

### `serializer`

```rust
serializer: SerializeResourceFn
```

The serializer of the retiring generation, the only code that can read
its stored value.

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
