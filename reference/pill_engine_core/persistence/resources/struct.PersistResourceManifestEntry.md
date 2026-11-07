<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6405"></a>

# Struct `pill_engine_core::persistence::resources::PersistResourceManifestEntry`

```rust
pub struct PersistResourceManifestEntry;
```

Source: `engine\pill_engine_core\src\persistence\resources.rs:83`

One persistable resource registration, as the reload transaction sees it.

Captured before the swap by [`World::persist_resource_manifest`](../../world/struct.World.md#rustdoc-item-6404) so the pass
afterwards can compare schema hashes and read a reshaped value through the
serializer that wrote it. The component side splits the same information
across [`PersistTypeMetadata`](../components/struct.PersistTypeMetadata.md#rustdoc-item-6223), which keeps the retiring serializer, and
[`PersistTypeManifestEntry`](../components/struct.PersistTypeManifestEntry.md#rustdoc-item-6256), which keeps the name and the id.

## Fields

<a id="rustdoc-item-6400"></a>

### `resource_id`

```rust
resource_id: crate::resource::ResourceId
```

The id this resource was registered under when the entry was captured.

<a id="rustdoc-item-6401"></a>

### `type_name`

```rust
type_name: String
```

The name the resource is recorded under; a snapshot and a reload match
on it.

<a id="rustdoc-item-6402"></a>

### `schema_hash`

```rust
schema_hash: u64
```

Structural hash of the shape this generation declared.

<a id="rustdoc-item-6403"></a>

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Clone`
