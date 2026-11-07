<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3532"></a>

# Struct `pill_editor_core::notices::ProblemRow`

```rust
pub struct ProblemRow;
```

Source: `editor\pill_editor_core\src\notices.rs:69`

One Problems row: the module or function whose build, load or patch
reported it, and the diagnostic itself.

## Fields

<a id="rustdoc-item-5652"></a>

### `module`

```rust
module: String
```

The module or function that reported it.

<a id="rustdoc-item-5653"></a>

### `problem`

```rust
problem: crate::problems::Problem
```

The diagnostic, with the location when the compiler printed one.

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
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
