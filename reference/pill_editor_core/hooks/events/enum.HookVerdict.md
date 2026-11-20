<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5261"></a>

# Enum `pill_editor_core::hooks::events::HookVerdict`

```rust
pub enum HookVerdict { ... }
```

Source: `editor\pill_editor_core\src\hooks\events.rs:77`

What a before-callback decides about a field edit.

## Variants

<a id="rustdoc-item-5256"></a>

### `Keep`

```rust
Keep
```

Apply the edit as planned.

<a id="rustdoc-item-5258"></a>

### `Replace`

```rust
Replace
```

Apply this value instead; the edit's history step keeps the original
value as its inverse.

<a id="rustdoc-item-5260"></a>

### `Refuse`

```rust
Refuse
```

Refuse the edit. The whole batch it belongs to is dropped, nothing is
recorded, and the reason becomes an editor notice.

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
