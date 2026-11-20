<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5073"></a>

# Enum `pill_editor_core::hooks::events::FieldEditCause`

```rust
pub enum FieldEditCause { ... }
```

Source: `editor\pill_editor_core\src\hooks\events.rs:53`

What made a field edit happen.

## Variants

<a id="rustdoc-item-5215"></a>

### `Authored`

```rust
Authored
```

A person or a script authored the edit.

<a id="rustdoc-item-5120"></a>

### `HistoryRestored`

```rust
HistoryRestored
```

The editor replayed a history step; the step already holds the result,
so a callback's follow-ups are dropped.

## Associated functions and methods

<a id="rustdoc-item-5216"></a>

### `name`

```rust
pub fn name(self: Self) -> &'static str;
```

The cause's wire name, as the log lines spell it.

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
