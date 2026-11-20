<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1366"></a>

# Struct `pill_engine_core::scene::scene::Scene`

```rust
pub struct Scene;
```

Source: `engine\pill_engine_core\src\scene\scene.rs:114`

A scene asset. It holds the document it was loaded from, and components
can name it with a `Handle<Scene>`.

## Fields

<a id="rustdoc-item-7869"></a>

### `document`

```rust
document: SceneDocument
```

The document the file held.

## Associated functions and methods

<a id="rustdoc-item-7870"></a>

### `document`

```rust
pub fn document(self: &Self) -> &SceneDocument;
```

The document this scene was loaded from.

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
- `Debug`
- `Clone`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Asset`
- `TraitAccessible<dyn Asset>`
- `StandaloneAsset`
