<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5"></a>

# Enum `pill_editor_core::assets::CreateKind`

```rust
pub enum CreateKind { ... }
```

Source: `editor\pill_editor_core\src\assets.rs:84`

What a create dialog writes when it is confirmed.

## Variants

<a id="rustdoc-item-112"></a>

### `Asset`

```rust
Asset
```

A standalone asset's default document.

<a id="rustdoc-item-113"></a>

### `EmptyScene`

```rust
EmptyScene
```

An empty scene: the world is cleared and its empty document written.

<a id="rustdoc-item-114"></a>

### `SaveWorld`

```rust
SaveWorld
```

The current world, written as a new scene (Save Scene As).

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
