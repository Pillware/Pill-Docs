<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5554"></a>

# Enum `pill_engine_core::settings::settings::SettingsOutcome`

```rust
pub enum SettingsOutcome { ... }
```

Source: `engine\pill_engine_core\src\settings\settings.rs:49`

What a manager did with a document.

## Variants

<a id="rustdoc-item-10227"></a>

### `Applied`

```rust
Applied
```

The document is in effect.

<a id="rustdoc-item-10228"></a>

### `Refused`

```rust
Refused
```

The manager refused it, kept what it had, and logged why.

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
