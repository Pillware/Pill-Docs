<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7338"></a>

# Struct `pill_editor_core::session::PanelWindowAnswer`

```rust
pub struct PanelWindowAnswer;
```

Source: `editor\pill_editor_core\src\session.rs:192`

The answer a modal window took: Apply or Enter accepts, Cancel or Escape
dismisses.

## Fields

<a id="rustdoc-item-7335"></a>

### `window`

```rust
window: String
```

The id of the window that was answered.

<a id="rustdoc-item-7336"></a>

### `source`

```rust
source: String
```

The crate that owns it.

<a id="rustdoc-item-7337"></a>

### `accepted`

```rust
accepted: bool
```

Whether the answer accepted rather than dismissed.

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
