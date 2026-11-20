<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1936"></a>

# Enum `pill_editor_core::hooks::events::FieldEditPhase`

```rust
pub enum FieldEditPhase { ... }
```

Source: `editor\pill_editor_core\src\hooks\events.rs:34`

Which part of one field interaction an edit belongs to.

A drag or scrub reports [`Self::Interactive`](#rustdoc-item-1933) on every frame it changes
something and one [`Self::Committed`](#rustdoc-item-1934) when the pointer is released. A
checkbox, an enum pick, an asset pick, a text field that lost focus and a
scripted or panel write report one [`Self::Committed`](#rustdoc-item-1934) edit.

## Variants

<a id="rustdoc-item-1933"></a>

### `Interactive`

```rust
Interactive
```

One frame of a continuous interaction.

<a id="rustdoc-item-1934"></a>

### `Committed`

```rust
Committed
```

The interaction ended, or it was a one-shot edit.

## Associated functions and methods

<a id="rustdoc-item-5175"></a>

### `name`

```rust
pub fn name(self: Self) -> &'static str;
```

The phase's wire name, as the log lines spell it.

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
