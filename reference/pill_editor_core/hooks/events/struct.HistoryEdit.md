<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5535"></a>

# Struct `pill_editor_core::hooks::events::HistoryEdit`

```rust
pub struct HistoryEdit<'a>;
```

Source: `editor\pill_editor_core\src\hooks\events.rs:298`

One walk through the undo history.

## Fields

<a id="rustdoc-item-5533"></a>

### `direction`

```rust
direction: &'a str
```

`"undo"` or `"redo"`.

<a id="rustdoc-item-5534"></a>

### `label`

```rust
label: &'a str
```

The step's label, as the history recorded it.

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
- `Copy`
- `Debug`
