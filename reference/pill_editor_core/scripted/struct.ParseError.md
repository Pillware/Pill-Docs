<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8909"></a>

# Struct `pill_editor_core::scripted::ParseError`

```rust
pub struct ParseError;
```

Source: `editor\pill_editor_core\src\scripted.rs:578`

Why a scripted line could not be parsed.

## Fields

<a id="rustdoc-item-9185"></a>

### `reason`

```rust
reason: String
```

The sentence the runner logs beside the line, which says what the verb
needs.

## Associated functions and methods

<a id="rustdoc-item-9186"></a>

### `new`

```rust
pub(in scripted) fn new<impl Into<String>: Into<String>>(reason: impl Into<String>) -> Self;
```

One error carrying `reason`.

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
