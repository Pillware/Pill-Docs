<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6491"></a>

# Enum `pill_editor_core::requests::HistoryRequest`

```rust
pub enum HistoryRequest { ... }
```

Source: `editor\pill_editor_core\src\requests.rs:69`

One undo or redo the menu bar asked for, applied by the executable.

## Variants

<a id="rustdoc-item-6535"></a>

### `Undo`

```rust
Undo
```

Undoes the newest recorded step.

<a id="rustdoc-item-6536"></a>

### `Redo`

```rust
Redo
```

Redoes the newest undone step.

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
