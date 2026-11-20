<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2587"></a>

# Struct `pill_editor_core::editor_state::ElementRef`

```rust
pub struct ElementRef;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:666`

One element of one entity: what a tool reports and the selection stores.

The id is the tool's own and stays valid while the component it belongs to
is unchanged; the entity is part of the key because element ids are only
unique within one entity.

## Fields

<a id="rustdoc-item-3690"></a>

### `entity`

```rust
entity: pill_engine::Entity
```

The entity the element belongs to.

<a id="rustdoc-item-3691"></a>

### `id`

```rust
id: u64
```

The tool's own id for the element.

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
- `SerializableAny`
- `Equivalent<K>`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
