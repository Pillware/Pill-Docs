<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9028"></a>

# Enum `pill_engine_core::services::gizmos::GizmoChrome`

```rust
pub enum GizmoChrome { ... }
```

Source: `engine\pill_engine_core\src\services\gizmos.rs:739`

What the pass's drawing is, which decides the surfaces that show it.

## Variants

<a id="rustdoc-item-9026"></a>

### `Editor`

```rust
Editor
```

Editor chrome: drawn in the editor's own views and never in a game's.

<a id="rustdoc-item-9027"></a>

### `Game`

```rust
Game
```

Plain debug drawing: drawn on every surface, which is what a
development host wants - its only surface is a game's.

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
- `Equivalent<K>`
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
